import service from '../server/service';

// 获取历史记录
export const getHistory = (userId: String) => service.get(`/history/${userId}`);
export const getHistoryList = (userId: String) => service.get(`/history/list/${userId}`);

// 预测
// export const predict = (data: FormData, userId: String) => serviceForm.post(`/predict/${userId}`, data);