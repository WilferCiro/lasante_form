import { Button, PageHeader } from "antd";
import { useContext } from "react";
import { ContextAuth } from "../../../../shared/context/auth_context";

const CustomHeader = () => {
  const { logout, auth } = useContext(ContextAuth);

  const logoutSession = () => {
    logout();
  }

  return (
    <PageHeader
      style={{ padding: '8px 25px'}}
      ghost={false}
      title={<img src="/img/logo.png" className="page-logo" />}
      extra={[
        <p key="name">{auth.name}</p>,
        <Button key="1" type="primary" onClick={logoutSession}>
          Cerrar sesión
        </Button>,
      ]}
    >
    </PageHeader>
  )
}

export default CustomHeader;