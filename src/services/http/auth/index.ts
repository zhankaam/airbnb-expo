import axios from 'axios';

const baseURL = 'https://apingweb.com/api/';

const instance = axios.create({
  baseURL,
});

export const authAPI = {
  signUp(formData: FormDataType) {
    return instance.post('register', formData).then(res => res.data);
  },
  signIn(formData: Pick<FormDataType, 'email' | 'password'>) {
    return instance.post('login', formData).then(res => res.data);
  },
};

export type FormDataType = Record<'email' | 'password', string>;

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
