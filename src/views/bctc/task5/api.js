import request from '@/router/axios';

export const getList = (current, size, params) => {
  return request({
    url: '/api/bctc/task/list',
    method: 'get',
    params: {
      ...params,
      current,
      size,
    }
  })
}

export const getDetail = (id) => {
  return request({
    url: '/api/bctc/task/detail',
    method: 'get',
    params: {
      id
    }
  })
}

export const remove = (ids) => {
  return request({
    url: '/api/bctc/task/remove',
    method: 'post',
    params: {
      ids,
    }
  })
}

export const add = (row) => {
  return request({
    url: '/api/bctc/task/submit',
    method: 'post',
    data: row
  })
}

export const update = (row) => {
  return request({
    url: '/api/bctc/task/submit',
    method: 'post',
    data: row
  })
}


export const finish = (ids) => {
  return request({
    url: '/api/bctc/task/finish',
    method: 'post',
    params:{
      ids
    }
  })
}

export const cancel = (ids) => {
  return request({
    url: '/api/bctc/task/cancel',
    method: 'post',
    params:{
      ids
    }
  })
}

