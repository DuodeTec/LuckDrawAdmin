import request from '@/utils/request';
export async function query() {
  return request(apiUrl+'users');
}
export async function queryCurrent() {
  return request(apiUrl+'currentUser');
}
export async function queryNotices() {
  return request(apiUrl+'notices'); 
}

export async function getLuckUser(params) {
  let res=  await request(apiUrl+'getLuckUserList',{
    method: 'POST',
    data: params,
  });
  return res;
}
export async function getAllUser(params) {
  let res=  await request(apiUrl+'getAllUserList',{
    method: 'POST',
    data: params,
  });
  return res;
}
export async function getNewAllLuckUser(params) {
  let res=  await request(apiUrl+'getNewAllLuckUser',{
    method: 'POST',
    data: params,
  });
  return res;
}
export async function getIntegralHistory(params) {
  let res=  await request(apiUrl+'getIntegralHistory',{
    method: 'POST',
    data: params,
  });
  return res;
}
export async function delIntegralHistory(params) {
  let res=  await request(apiUrl+'delScoreHistory',{
    method: 'POST',
    data: params,
  });
  return res;
}

export async function delUserInfo(params) {
  let res=  await request(apiUrl+'delUserInfo',{
    method: 'POST',
    data: params,
  });
  return res;
}