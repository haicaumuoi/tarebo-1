import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import axiosInstance from '~/app/api';
import {
  API_PATH,
  EMAIL_PASSWORD_REGEX_FULL,
  PASSWORD_REGEX_FULL,
  PHONE_REGEX_FULL,
  ROUTES_PATH,
} from '~/constants';

const defaultValues = {
  email: '',
  phone: '',
  password: '',
};

const schema = yup
  .object({
    email: yup
      .string()
      .required('Enter user name or email')
      .matches(
        EMAIL_PASSWORD_REGEX_FULL,
        'At least one lowercase, uppercase, numbers, and special characters'
      ),
    phone: yup
      .string()
      .required('Enter phone number')
      .matches(
        PHONE_REGEX_FULL,
        'At least one lowercase, uppercase, numbers, and special characters'
      ),
    password: yup
      .string()
      .required('Password is a required field')
      .matches(
        PASSWORD_REGEX_FULL,
        'At least one lowercase, uppercase, numbers, and special characters'
      ),
  })
  .required();

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const { response, msg } = await axiosInstance.post(API_PATH.auth.signup, {
        ...data,
        username: data.email.split('@')[0],
      });
      console.log(response);
      if (+response === 200) {
        return navigate(ROUTES_PATH.common.login);
      } else {
        toast.error(msg);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="bg-white w-[36rem] h-[56rem] rounded-3xl flex  items-center flex-col z-20 py-10 border border-[#ccc] mb-4">
        <div className="font-bold text-2xl  mb-1">T???o t??i kho???n</div>

        <div className="my-5 w-full px-8">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-5">
            <div className="text-gray-400">Email</div>
            <input
              {...register('email')}
              className="border border-gray-400 h-16 rounded-lg my-2 py-5 px-4 focus:outline-none"
              id="email"
            />
            {errors.email && (
              <span className="text-[#df2a2a]">Nh???p t??n ????ng nh???p ho???c email ho??n ch???nh</span>
            )}
            <div className="text-gray-400">S??? ??i???n tho???i</div>
            <input
              {...register('phone')}
              className="border border-gray-400 h-16 rounded-lg my-2 py-5 px-4 focus:outline-none"
              id="phoneNumber"
            />
            {errors.phone && <span className="text-[#df2a2a]">Nh???p s??? ??i???n tho???i ho??n ch???nh</span>}
            <div className="text-gray-400">M???t Kh???u</div>
            <input
              {...register('password')}
              id="password"
              className="border border-gray-400 h-16 rounded-lg my-2 py-5 px-4 focus:outline-none mb-8"
            />
            {errors.password && (
              <span className="text-[#df2a2a]">
                M???t kh???u d??i 8 k?? t??? bao g???m ??t nh???t 1 ch??? th?????ng, 1 ch??? hoa, 1 s??? v?? 1 k?? t??? ?????c
                bi???t{' '}
              </span>
            )}
            <button
              type="submit"
              className="w-full rounded-3xl bg-[#000] font-semibold text-[#fff] h-16 mt-4 hover:opacity-60 transition-all"
            >
              ????ng K??
            </button>
          </form>
        </div>
        <div className="mt-6">
          B???n ???? c?? t??i kho???n?{' '}
          <span>
            <Link to="/login" className="font-semibold border-b border-b-black my-2">
              ????NG NH???P
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
