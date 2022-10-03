import { SelectType } from "../models/select.type";
import axios from 'axios';

interface Response {
  token: string;
  name: string;
}

export const loginService = async (username: string, password: string): Promise<Response | null> => {
  try{
    const data = await axios.post('/auth/login', {username, password});
    if (data.status >= 200 && data.status < 300) {
      localStorage.setItem('token', data.data.token);
      return data.data;
    }
  }
  catch(error) {
    console.log(error);
  }
  return null;
}

interface ResponseProfile {
  distCode: string;
  distName: string;
}

export const profileService = async (): Promise<ResponseProfile | null> => {
  try{
    const data = await axios.get('/users/profile');
    if (data.status >= 200 && data.status < 300) {
      return data.data;
    }
  }
  catch(error) {
    console.log(error);
  }
  return null;
}