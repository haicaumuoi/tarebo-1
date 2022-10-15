import { default as axios } from '~/app/api';
import { API_CODE, API_PATH } from '~/constants';

export const getList = async (callback, params) => {
  try {
    const { code, data, ...pagination } = await axios.get(API_PATH.posts.getList, {
      params,
    });
    if (+code === API_CODE.success) {
      typeof callback === 'function' && callback(data, pagination);
    }
  } catch (error) {
    console.log({ error });
  }
};

export const getListByCategory = async (callback, params) => {
  try {
    const { code, data, ...pagination } = await axios.get(API_PATH.posts.getByCategory, {
      params,
    });
    if (+code === API_CODE.success) {
      typeof callback === 'function' && callback(data, pagination);
    }
  } catch (error) {
    console.log({ error });
  }
};

export const getListByStatus = async (callback, params) => {
  try {
    const { code, data, ...pagination } = await axios.get(API_PATH.posts.getByStatus, {
      params,
    });
    if (+code === API_CODE.success) {
      typeof callback === 'function' && callback(data, pagination);
    } else {
      typeof callback === 'function' && callback([]);
    }
  } catch (error) {
    console.log({ error });
  }
};
