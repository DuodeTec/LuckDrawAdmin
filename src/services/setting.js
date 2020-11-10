import request from '@/utils/request';
export async function getSetting(params) {
    let res=  await request(apiUrl+'getSetting',{
      method: 'POST',
      data: params,
    });
    return res;
  }
  export async function updateSetting(params) {
    let res=  await request(apiUrl+'updateSetting',{
      method: 'POST',
      data: params,
    });
    return res;
  }
  