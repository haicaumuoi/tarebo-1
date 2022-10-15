import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { EMAIL_PASSWORD_REGEX_FULL, PASSWORD_REGEX_FULL, PHONE_REGEX_FULL } from '~/constants';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import SignUpPage from '../SignUp';

const defaultValues = {
  username: '',
  password: '',
};

const schema = yup
  .object({
    username: yup
      .string()
      .required('Enter user name or email')
      .matches(
        EMAIL_PASSWORD_REGEX_FULL,
        'At least one lowercase, uppercase, numbers, and special characters'
      ),
    phoneNumber: yup
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

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center ">
      <div>
        <h1 className="font-bold text-2xl mt-16">GIA NHẬP TAREBO CÙNG VỚI</h1>
        <div className="flex flex-col space-y-3 my-5">
          <div className="px-8 hover:-translate-y-1 transition-all mx-2 border border-gray-500 rounded-3xl flex justify-center items-center py-2">
            <button className="w-6 h-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z" />
                <path
                  fill="#fff"
                  d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                />
              </svg>
            </button>
            <span className="ml-2">Sign In with Facebook</span>
          </div>
          <div className="px-6 hover:-translate-y-1 transition-all mx-2 border border-gray-500 rounded-3xl flex justify-center items-center py-2">
            <button className="w-6 h-6">
              <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                {' '}
                <path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z" />
              </svg>
            </button>{' '}
            <span className="ml-2">Sign In with Apple</span>
          </div>{' '}
          <div className="px-6 hover:-translate-y-1 transition-all mx-2 border border-gray-500 rounded-3xl flex justify-center items-center py-2">
            <button className="w-6 h-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path
                  fill="#fbc02d"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#e53935"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4caf50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1565c0"
                  d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
            </button>{' '}
            <span className="ml-2">Sign In with Google</span>
          </div>{' '}
          <div className="px-6 hover:-translate-y-1 transition-all mx-2 border border-gray-500 rounded-3xl flex justify-center items-center py-2">
            <button className="w-6 h-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path
                  fill="#03A9F4"
                  d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
                />
              </svg>
            </button>{' '}
            <span className="ml-2">Sign In with Twitter</span>
          </div>
        </div>
      </div>
      <div className="mb-4 text-gray-800">OR</div>
      <SignUpPage />
    </div>
  );
};

export default SignInPage;
