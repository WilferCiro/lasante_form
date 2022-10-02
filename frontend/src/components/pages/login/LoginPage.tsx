import { LockOutlined, LoginOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Divider, Form, Input, message } from "antd";
import { useContext, useState } from "react";
import { ContextAuth } from "../../../shared/context/auth_context";
import { loginService } from "../../../shared/services/login.service";

interface FormLoginProps {
  username: string;
  password: string;
}

const LoginPage = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [form] = Form.useForm();
  const { modifyAuth } = useContext(ContextAuth);

  const onFinish = async (values: FormLoginProps) => {
    setLoading(true);
    const data = await loginService(values.username, values.password);
    if (data) {
      modifyAuth({
        name: data.name,
        isAuth: true,
        token: data.token
      });
    }
    else{
      message.error("Error al iniciar sesión, por favor compruebe sus datos");
    }
    setLoading(false);
  }
  
  return (
    <div className="login">

			<ul className="squares">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>

      <div className="form-container">
        <div className="form">
					<img
						placeholder="blur"
						src={"/img/logo.png"}
						alt="Logo de lasanté"
            style={{ width: '90%'}}
					/>
          <h2>Iniciar sesión</h2>
          <Divider />
          <Form
            form={form}
            name="basic"
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Por favor ingrese el usuario' }]}
            >
              <Input placeholder="Usuario" max={7} prefix={<UserOutlined className="site-form-item-icon" />} />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Por favor ingrese la clave' }]}
            >
              <Input.Password placeholder="Clave" prefix={<LockOutlined className="site-form-item-icon" />} />
            </Form.Item>
            <Divider />
            <Form.Item>
              <Button size="large" type="primary" htmlType="submit" shape="round" icon={<LoginOutlined />} block loading={loading}>
                Iniciar sesión
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;