import { userLoginRes, userProfileRes, userRegisterRes } from '@/types/user';
import service from '../server/service';

// 用户注册,登录,登出
export const userRegister = (data: userRegisterRes) => service.post('/register', data);
export const userLogin = (data: userLoginRes) => service.post('/login', data);

// 获取用户信息
export const getProfile = () => service.get(`/profile`);
export const updateUserInfo = (data: userProfileRes, userId: String) => service.put(`/userinfo/${userId}/update`, data);

