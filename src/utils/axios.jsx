import axios from 'axios';

//local imports
import { StatusCode } from './';
import { ShowToast } from 'components';

const { REACT_APP_API } = process.env;

const axiosInstance = axios.create({
  baseURL: REACT_APP_API
});

const responseSuccessInterceptor = (response) => {
  if (
    response.config.hasOwnProperty('handleNotification') &&
    response.config.handleNotification === true
  ) {
    const status_code = response.data.status_code;
    const successMessage = StatusCode.statusCode[status_code] || 'İşlem başarılı';
    ShowToast('success', successMessage);
  }
  return response;
};

const responseErrorInterceptor = (error) => {
  if (
    (error?.config?.hasOwnProperty('handleNotification') &&
      error?.config?.handleNotification === true) ||
    (error?.config?.hasOwnProperty('onlyError') && error?.config?.onlyError === true)
  ) {
    if (error.response) {
      const err_status_code = error.response.data.status_code;
      const errorMessage = StatusCode.statusCode[err_status_code] || 'İşlem başarısız';
      ShowToast('error', errorMessage);
    }
  }

  return Promise.reject(error);
};

axiosInstance.interceptors.response.use(responseSuccessInterceptor, responseErrorInterceptor);

export default axiosInstance;
