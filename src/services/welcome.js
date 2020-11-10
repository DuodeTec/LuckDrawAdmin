import request from '@/utils/request';
// export async function getWelcome() {
//   return request('/api/getWelcome');
// }

export async function getWelcome(params) {
    let res=  await request(apiUrl+'getWelcome',{
      method: 'POST',
      data: params,
    });
    return res;
  }