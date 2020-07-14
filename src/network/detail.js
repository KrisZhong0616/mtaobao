import { request } from './request'

export function getDetailMultidata () {
  return request({
    url: '/home/multidata'
  })
}
