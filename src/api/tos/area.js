import request from '@/router/axios';

//                     pageNum  pageSize  筛选查询参数
export const getList = (current, size, params) => {
  // 时间范围筛选
  if (params.createTime) {
    params.createTimeBegin = params.createTime[0]
    params.createTimeEnd = params.createTime[1]
    delete params.createTime
  }
  return request({
    url: '/api/tos/area/list',
    method: 'get',
    params: {
      ...params,
      current,
      size
    }
  })
}

export const getDetail = (id) => {
  return request({
    url: '/api/tos/area/detail',
    method: 'get',
    params: {
      id
    }
  })
}

export const remove = (ids) => {
  return request({
    url: '/api/tos/area/remove',
    method: 'post',
    params: {
      ids,
    }
  })
}

export const add = (row) => {
  return request({
    url: '/api/tos/area/submit',
    method: 'post',
    data: row
  })
}

export const update = (row) => {
  return request({
    url: '/api/tos/area/submit',
    method: 'post',
    data: row
  })
}

