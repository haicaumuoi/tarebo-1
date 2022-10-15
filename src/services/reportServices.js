import { default as axios } from '~/app/api';
import { API_CODE, API_PATH } from '~/constants';

export const getList = async (callback, params) => {
  try {
    const { code, data, ...pagination } = await axios.get(API_PATH.reports.getList, {
      params,
    });
    if (+code === API_CODE.success) {
      typeof callback === 'function' && callback(data, pagination);
    }
  } catch (error) {
    console.log({ error });
  }
};
