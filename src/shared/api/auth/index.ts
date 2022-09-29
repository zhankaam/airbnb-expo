import { instance } from 'src/shared/api';

export type FormDataType = Record<
  'name' | 'email' | 'phone' | 'password' | 'password_confirmation',
  string
>;

type ResponseType = {
  errors: string[];
  message: string;
  status: number;
  success: boolean;
  token: string;
};

export type LoginResponseType = ResponseType & {
  result: {
    id: number;
    name: string;
    phone: string;
    email: string;
  };
};

export const authAPI = {
  signUp(formData: FormDataType) {
    return instance.post('register', formData).then(res => res.data);
  },
  signIn(formData: Pick<FormDataType, 'email' | 'password'>) {
    return instance.post('login', formData).then(res => res.data);
  },
};
