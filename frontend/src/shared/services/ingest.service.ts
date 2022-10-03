import axios from 'axios';

export interface ProductInterface {
  ammount: string;
  description: string;
  quantity: string;
  sucursal: string;
}

interface DataInterface {
  client: string;
  cutType: string;
  distCode: number;
  distName: string;
  idList: number;
  promotor: string;
  range_date: string[];
  products: ProductInterface[]
}

export const ingestService = async (dataIngest: DataInterface): Promise<boolean> => {
  try{
    const data = await axios.post('/headers', dataIngest);
    if (data.status >= 200 && data.status < 300) {
      return true;
    }
  }
  catch(error) {
    console.log(error);
  }
  return false;
}