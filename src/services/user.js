import request from '@/utils/request';
export async function query() {
  return request('/api/users');
}
export async function queryCurrent() {
  return request('/api/currentUser');
}
export async function queryNotices() {
  return request('/api/notices'); 
}

export async function getLuckUser(params) {
  let res=  await request('/api/getLuckUserList',{
    method: 'POST',
    data: params,
  });
  return res;
}
export async function getAllUser(params) {
  let res=  await request('/api/getAllUserList',{
    method: 'POST',
    data: params,
  });
  return res;
}