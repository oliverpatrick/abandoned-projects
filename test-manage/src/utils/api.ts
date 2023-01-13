import axios, { AxiosRequestConfig } from 'axios';
import { IUser } from './interfaces/IUser';
import { IUserCredentialsParams } from './interfaces/IUserCredentialsParams';

const API_URL = process.env.REACT_APP_API_URL;

const axiosClient = axios.create({ baseURL: API_URL });
const config: AxiosRequestConfig = { withCredentials: true };

export const getAuthUser = () => axiosClient.get<IUser>(`/users`, config);

export const postLoginUser = (data: IUserCredentialsParams) =>
  axiosClient.post(`/login`, data, config);
