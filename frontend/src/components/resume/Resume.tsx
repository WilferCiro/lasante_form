import { Alert, Anchor, Descriptions, Divider } from "antd"

const Resume = () => {
  return (
    <Anchor>
      <div style={{ padding: '5px 20px'}}>
        {/*<h2>Resumen</h2>*/}
        <Alert message="Fecha de creación de la lista" description={new Date().toDateString()} />
        {/*<Divider />
        <Descriptions bordered size="small">
            <Descriptions.Item label="Dist código" span={3}>Cloud Database</Descriptions.Item>
            <Descriptions.Item label="Dist nombre" span={3}>Cloud Database</Descriptions.Item>
            <Descriptions.Item label="Promotor" span={3}>Cloud Database</Descriptions.Item>
            <Descriptions.Item label="Nombre cliente" span={3}>Cloud Database</Descriptions.Item>
            <Descriptions.Item label="Código lista" span={3}>Cloud Database</Descriptions.Item>
            <Descriptions.Item label="Tipo corte" span={3}>Cloud Database</Descriptions.Item>
            <Descriptions.Item label="Código" span={3}>Cloud Database</Descriptions.Item>
  </Descriptions>*/}
      </div>
    </Anchor>
  )
}

export default Resume;