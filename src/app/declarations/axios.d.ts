import 'axios';

// https://github.com/axios/axios/issues/3815
declare module 'axios' {
  interface AxiosStatic {
    isAxiosError<T = any>(payload: any): payload is AxiosError<T>;
  }
}
