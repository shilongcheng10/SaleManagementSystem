/*
* 作者：王震
* 时间：2019.05.06
* 功能：奖励规则Mock文件
*
* */
import Mock from 'mockjs'
import { param2Obj } from '@/utils'

let List = []
const count =30

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: Mock.Random.guid(),
    num:'@increment()',
    title: Mock.Random.ctitle(),
    content: Mock.mock('@cparagraph'),
    createDate: Mock.mock('@datetime("yyyy-MM-dd-HH:mm")')
  }))
}

export default {
  getAwardList: config => {
    const { title, createDate, page = 1, limit = 5 } = param2Obj(config.url)

    const mockList = List.filter(award => {
      if (title && award.title.indexOf(title) === -1) return false
      if(createDate && award.createDate.indexOf(createDate) === -1) return false
      return true
    })

    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

    return {
      code: 0,
      data: {
        total: mockList.length,
        awards: pageList
      }
    }
  },
  createAward: config => {
    const { id,num, title, content, createDate } = param2Obj(config.url)
    console.log('66')
    List.unshift({
      id: id,
      num:num,
      title: title,
      content: content,
      createDate: createDate,
    })
    return {
      code: 0,
      data: {
        message: '发布成功'
      }
    }
  },
  deleteAward: config => {
    const { id } = param2Obj(config.url)
    List = List.filter(u => u.id !== id)
    return {
      code: 0,
      data: {
        message: '删除成功'
      }
    }
  },
  batchremove: config => {
    let { ids } = param2Obj(config.url)
    ids = ids.split(',')
    List = List.filter(u => !ids.includes(u.id))
    return {
      code: 0,
      data: {
        message: '批量删除成功'
      }
    }
  },
  updateAward: config => {
    const { id,num, title, content, createDate} = param2Obj(config.url)
    List.some(u => {
      if (u.id === id) {
        u.num=num
        u.title = title
        u.content = content
        u.createDate = createDate
        return true
      }
    })
    return {
      code: 0,
      data: {
        message: '编辑成功'
      }
    }
  }
}
