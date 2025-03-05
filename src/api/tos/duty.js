import request from '@/router/axios';

export const getList = (current, size, params) => {
  // 时间范围筛选
  if (params.createTime) {
    params.createTimeBegin = params.createTime[0]
    params.createTimeEnd = params.createTime[1]
    delete params.createTime
  }
  return request({
    url: '/api/tos/duty/list',
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
    url: '/api/tos/duty/detail',
    method: 'get',
    params: {
      id
    }
  })
}

export const remove = (ids) => {
  return request({
    url: '/api/tos/duty/remove',
    method: 'post',
    params: {
      ids,
    }
  })
}

export const add = (row) => {
  return request({
    url: '/api/tos/duty/submit',
    method: 'post',
    data: row
  })
}

export const update = (row) => {
  return request({
    url: '/api/tos/duty/submit',
    method: 'post',
    data: row
  })
}

