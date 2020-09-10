import request from '@/utils/request';
export async function getSetting(params) {
    let res=  await request('/api/getSetting',{
      method: 'POST',
      data: params,
    });
    return res;
  }
  export async function updateSetting(params) {
    let res=  await request('/api/updateSetting',{
      method: 'POST',
      data: params,
    });
    return res;
  }
  