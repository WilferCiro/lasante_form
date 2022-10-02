import { MinusCircleOutlined, PlusCircleFilled, PlusOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Popconfirm, Space } from "antd";
import { Fragment, useState } from "react";
import SelectSearch from "../UI/atoms/select_search";

interface Props {
  getExtraData?: () => any;
}

const FormProducts = ({getExtraData} : Props) => {
  const [ form ] = Form.useForm();
  const finish = async () => {
    await form.validateFields();
    console.log('Received values of form:', form.getFieldsValue());
  };

  return (
    <Card style={{marginTop: "10px"}} title="Productos" size="small">
      <Form 
        name="dynamic_form_nest_item" 
        autoComplete="off"
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.List name="users" >
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Card size="small" key={key} extra={[
                  <Popconfirm
                    key="item1"
                    title="¿Realmente Desea eliminar este producto de la lista?"
                    onConfirm={() => remove(name)}
                    okText="Si"
                    cancelText="No"
                  >
                    <MinusCircleOutlined />
                  </Popconfirm>                  
                ]}>
                  <Form.Item
                    {...restField}
                    label="Sucursal"
                    name={[name, 'sucursal']}
                    rules={[{ required: true, message: 'Missing first name' }]}
                  >
                    <SelectSearch placeholder="Buscar sucursal" endpoint="sucursals" getExtraData={getExtraData} />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    label="Descripción"
                    name={[name, 'description']}
                    rules={[{ required: true, message: 'Missing last name' }]}
                  >
                    <SelectSearch placeholder="Buscar producto" endpoint="products" getExtraData={getExtraData} />
                  </Form.Item>
                  <Space key={key} style={{ display: 'flex', marginBottom: 8, width: "100%" }} align="baseline">
                    <Form.Item
                      {...restField}
                      label="Unidades"
                      name={[name, 'quantity']}
                      rules={[{ required: true, message: 'Missing first name' }]}
                    >
                      <Input placeholder="Unidades" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      label="Monto"
                      name={[name, 'ammount']}
                      rules={[{ required: true, message: 'Missing last name' }]}
                    >
                      <Input placeholder="Monto" />
                    </Form.Item>
                  </Space>
                </Card>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Nuevo producto
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
        <Button type="primary" onClick={finish}>
          Submit
        </Button>
    </Card>
  );
}

export default FormProducts;