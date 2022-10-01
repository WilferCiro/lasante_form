
// Custom
import SelectSearch from "../UI/atoms/select_search";

// Antd
import { Typography, DatePicker } from 'antd';

const { Title } = Typography;
const { RangePicker } = DatePicker;

const FormPromotor = () => {
  
  return (
    <>
      <SelectSearch />
      <Title level={4}>Lista</Title>
      <RangePicker />
      <Title level={4}>Productos</Title>
      
    </>
  );
}

export default FormPromotor;