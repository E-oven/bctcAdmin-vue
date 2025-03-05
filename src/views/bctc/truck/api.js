import request from '@/router/axios';

export const getList = (current, size, params) => {
  return request({
    url: '/api/bctc/truck/list',
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
    url: '/api/bctc/truck/detail',
    method: 'get',
    params: {
      id
    }
  })
}

export const isExists = (id, number) => {
  return request({
    url: '/api/bctc/truck/exists',
    method: 'get',
    params: {
      id, number
    }
  })
}


export const remove = (ids) => {
  return request({
    url: '/api/bctc/truck/remove',
    method: 'post',
    params: {
      ids,
    }
  })
}

export const add = (row) => {
  return request({
    url: '/api/bctc/truck/submit',
    method: 'post',
    data: row
  })
}

export const update = (row) => {
  return request({
    url: '/api/bctc/truck/submit',
    method: 'post',
    data: row
  })
}

