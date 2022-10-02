import { Button, Result } from "antd";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return <Result
    status="404"
    title="404"
    subTitle="Lo sentimos, esta página no existe."
    extra={<Link to="/"><Button type="primary">Volver al inicio</Button></Link>}
  />
}

export default NotFoundPage;