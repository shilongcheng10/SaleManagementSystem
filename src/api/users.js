import axios from 'axios'

const base = ''

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }) }

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }) }

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }) }

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }) }

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }) }

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }) }

/**
 *功能：个人信息修改、销售人员信息查询
 *作者：王从竹
 *日期：2019/5/9
 */
export const getUser= params => { return axios.get(`${base}/user/wcz`, { params: params }) }
export const getUsers = params => { return axios.get(`${base}/user/searchtable`, { params: params }) }

