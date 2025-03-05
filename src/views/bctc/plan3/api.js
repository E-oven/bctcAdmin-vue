import request from '@/router/axios';

export const getList = (current, size, params) => {
  return request({
    url: '/api/bctc/plan/list',
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
    url: '/api/bctc/plan/detail',
    method: 'get',
    params: {
      id
    }
  })
}

export const remove = (ids) => {
  return request({
    url: '/api/bctc/plan/remove',
    method: 'post',
    params: {
      ids,
    }
  })
}

export const add = (row) => {
  return request({
    url: '/api/bctc/plan/submit',
    method: 'post',
    data: row
  })
}

export const update = (row) => {
  return request({
    url: '/api/bctc/plan/submit',
    method: 'post',
    data: row
  })
}

export const finish = (ids) => {
  return request({
    url: '/api/bctc/plan/finish',
    method: 'post',
    params:{
      ids
    }
  })
}

export const sync = (ids) => {
  return request({
    url: '/api/bctc/plan/sync',
    method: 'post',
    params:{
      ids
    }
  })
}

export const cancel = (ids) => {
  return request({
    url: '/api/bctc/plan/cancel',
    method: 'post',
    params:{
      ids
    }
  })
}

