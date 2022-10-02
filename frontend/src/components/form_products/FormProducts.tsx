import { MinusCircleOutlined, PlusCircleFilled, PlusOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Space } from "antd";
import { Fragment, useState } from "react";


const FormProducts = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
  };

  return (
    <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
      <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Fragment key={key}>
                <Form.Item
                  {...restField}
                  name={[name, 'sucursal']}
                  rules={[{ required: true, message: 'Missing first name' }]}
                >
                  <Input placeholder="Sucursal" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'description']}
                  rules={[{ required: true, message: 'Missing last name' }]}
                >
                  <Input placeholder="Last Name" />
                </Form.Item>
                <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                  <Form.Item
                    {...restField}
                    name={[name, 'sucursal']}
                    rules={[{ required: true, message: 'Missing first name' }]}
                  >
                    <Input placeholder="Sucursal" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'description']}
                    rules={[{ required: true, message: 'Missing last name' }]}
                  >
                    <Input placeholder="Last Name" />
                  </Form.Item>
                </Space>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Fragment>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default FormProducts;