import { SelectType } from "../models/select.type";
import axios from 'axios';

export const selectService = async (query: string, endpoint: string): Promise<SelectType[]> => {
  try{
    const data = await axios.get('http://localhost:3000/' + endpoint + '?query=' + query);
    if (data.status >= 200 && data.status < 300) {
      return data.data;
    }
  }
  catch(error) {
    console.log(error);
  }
  return [];
}