import { SelectType } from "../models/select.type";
import axios from 'axios';

export const selectService = async (query: string, endpoint: string, extra: any): Promise<SelectType[]> => {
  try{
    const data = await axios.get('http://localhost:3000/' + endpoint, { params: { query, ...extra } });
    if (data.status >= 200 && data.status < 300) {
      return data.data;
    }
  }
  catch(error) {
    console.log(error);
  }
  return [];
}