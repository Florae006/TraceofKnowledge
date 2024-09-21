import service from '../server/service';
import { userRegisterData, userLoginData, userBaseInfo } from '@/types/user';
import serviceForm from '../server/serviceForm';

// 用户注册,登录,登出
export const userRegister = (data: userRegisterData) => service.post('/user/register', data);
export const userLogin = (data: userLoginData) => service.post('/user/login', data);
export const userLogout = (userId: String) => service.get(`/user/logout/${userId}`);

// 获取用户信息
export const getUserInfo = (userId: String) => service.get(`/userinfo/${userId}`);
export const updateUserInfo = (data: userBaseInfo, userId: String) => service.put(`/userinfo/${userId}/update`, data);
export const getAvatar = (userId: String) => service.get(`/userinfo/avatar/${userId}`);

// 更新用户头像: FormData
export const updateAvatar = (data: FormData, userId: String) => serviceForm.put(`/userinfo/avatar/${userId}/update`, data);

