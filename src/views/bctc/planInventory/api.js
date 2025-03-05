import request from '@/router/axios';

export const getList = (current, size, params) => {
  return request({
    url: '/api/bctc/planInventory/list',
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
    url: '/api/bctc/planInventory/detail',
    method: 'get',
    params: {
      id
    }
  })
}

export const remove = (ids) => {
  return request({
    url: '/api/bctc/planInventory/remove',
    method: 'post',
    params: {
      ids,
    }
  })
}

export const add = (row) => {
  return request({
    url: '/api/bctc/planInventory/submit',
    method: 'post',
    data: row
  })
}

export const update = (row) => {
  return request({
    url: '/api/bctc/planInventory/submit',
    method: 'post',
    data: row
  })
}

export const assign = (planNumber,ids) => {
  return request({
    url: '/api/bctc/planInventory/assign/' + planNumber,
    method: 'post',
    params: {
      ids,
    }
  })
}

export const assignRemove = (planNumber,ids) => {
  return request({
    url: '/api/bctc/planInventory/assign/' + planNumber + '/remove',
    method: 'post',
    params: {
      ids,
    }
  })
}