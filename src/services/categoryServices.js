import { default as axios } from '~/app/api';
import { API_CODE, API_PATH } from '~/constants';

export const getList = async (params, callback) => {
  try {
    const { code, data, ...pagination } = await axios.get(API_PATH.categories.getList, {
      params,
    });
    if (+code === API_CODE.success) {
      typeof callback === 'function' && callback(data, pagination);
      return data;
    }
  } catch (error) {
    console.log({ error });
  }
};
