import { Select } from "antd";
import { FC, useEffect, useState } from "react";
import { SelectType } from "../../../../shared/models/select.type";
import { selectService } from "../../../../shared/services/select";
const { Option } = Select;



interface SelectInputProps {
  placeholder?: string;
  value?: number | string;
  onChange?: (value: number | string) => void;
  endpoint?: string;
  parentChange?: (register: SelectType) => void;
  getExtraData?: () => any;
  initialData?: SelectType[];
}

const SelectSearch: FC<SelectInputProps> = ({ value = undefined, onChange, placeholder, endpoint, parentChange, getExtraData, initialData = [] }) => {
  const [data, setData] = useState<SelectType[]>(initialData);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    handleSearch('');
  }, []);

  const triggerChange = (changedValue: number | string) => {
    onChange?.(changedValue);
  };

  const onChangeSelect = (e: string | number) => {
    const newNumber = e;
    triggerChange(newNumber);

    const register = data.find((dt: SelectType) => dt.value === newNumber);
    if (parentChange && register) {
      parentChange(register);
    }
    
  };

  const handleSearch = async (newValue: string) => {
    if (endpoint) {
      setLoading(true);
      let extra;
      if(getExtraData) {
        extra = getExtraData();
      }
      const data = await selectService(newValue, endpoint, extra);
      setData(data);
      setLoading(false);
    }
  };

  return (
    <Select
      showSearch
      showArrow={true}
      filterOption={false}
      onSearch={handleSearch}
      notFoundContent={null}
      style={{width: "100%"}}
      loading={loading}
      value={value}
      placeholder={placeholder}
      onChange={onChangeSelect}
    >
      {
        data.map(d => <Option key={d.value}>{d.label}</Option>)
      }
    </Select>
  );
}

export default SelectSearch;
