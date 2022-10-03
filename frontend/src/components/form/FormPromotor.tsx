
// Custom
import SelectSearch from "../UI/atoms/select_search";

// Antd
import { Typography, DatePicker, Card, Button, Row, Col, Alert, Divider, Form, Input, message } from 'antd';
import { PlusCircleFilled, SendOutlined } from '@ant-design/icons';
import { useContext, useEffect, useRef } from "react";
import { ContextAuth } from "../../shared/context/auth_context";
import { SelectType } from "../../shared/models/select.type";
import FormProducts from "../form_products";
import { profileService } from "../../shared/services/login.service";
import { FormProductRef } from "../form_products/FormProducts";
import { ingestService, ProductInterface } from "../../shared/services/ingest.service";
import Resume from "../resume";

const { Title } = Typography;
const { RangePicker } = DatePicker;

const cutData: SelectType[] = [
  {
    label: "Semanal",
    value: "Semanal"
  },
  {
    label: "Quincenal",
    value: "Quincenal"
  },
  {
    label: "Mensual",
    value: "Mensual"
  }
]

const FormPromotor = () => {
  const [ form ] = Form.useForm();
  const { auth } = useContext(ContextAuth);
  const formProductRef = useRef<FormProductRef>(null);

  useEffect(() => {
    getProfileData();
  }, []);

  const getProfileData = async () => {
    const profileData = await profileService();
    if (profileData) {
      form.setFieldValue('distCode', profileData.distCode);
      form.setFieldValue('distName', profileData.distName);
    }
  }

  const sendForm = async () => {
    const data = await form.validateFields();
    const dataForm = await formProductRef.current?.finish();
    const valid = await ingestService({...data, ...dataForm});
    if (valid) {
      message.success("Datos almacenados correctamente");
      form.resetFields();
      formProductRef.current?.reset();
    }
    else {
      message.error("Hubo un error al almacenar los datos");
    }
  }

  const changeClient = (register: SelectType) => {
    form.setFieldValue('idList', register.extra?.idList);
  }

  const getExtraData = () => {
    const { promotor, client, idList } = form.getFieldsValue();
    return { promotor, client, idList };
  }
  
  return (
    <>
      <Title level={3}>Ingreso - Reporte de venta</Title>
      <Divider />
      <Row gutter={[ 20, 50 ]}>
        <Col xs={24} md={16}>
          <Form 
            name="basic" 
            form={form}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            initialValues={{
              distCode: auth.distCode,
              distName: auth.distName
            }}
            >
            <Card title="Distribuidor" size="small">
              <Row gutter={[ 20, 20 ]}>
                <Col xs={8}>
                  <Form.Item
                    label="Código"
                    name="distCode"
                  >
                    <Input placeholder="Código" disabled={true} />
                  </Form.Item>                  
                </Col>
                <Col xs={16}>
                  <Form.Item
                    label="Nombre"
                    name="distName"
                  >
                    <Input placeholder="Nombre distribuidor" disabled={true} />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                label="Promotor"
                name="promotor"
                rules={[{ required: true, message: 'Por favor seleccione el promotor' }]}
              >
                <SelectSearch placeholder="Buscar promotor" endpoint="promotors" />
              </Form.Item>
            </Card>
            <Card title="Cliente" style={{marginTop: 10}} size="small">
              <Row gutter={[ 20, 20 ]}>
                <Col xs={16}>
                  <Form.Item
                    label="Cliente"
                    name="client"
                    rules={[{ required: true, message: 'Por favor seleccione el cliente' }]}
                  >
                    <SelectSearch placeholder="Buscar cliente" endpoint="clients" parentChange={changeClient} getExtraData={getExtraData} />
                  </Form.Item>
                </Col>
                <Col xs={8}>
                  <Form.Item
                    label="Cod. Lista"
                    name="idList"
                  >
                    <Input placeholder="Código lista" disabled />
                  </Form.Item>
                </Col>
              </Row>
            </Card>
            <Card title="Corte" style={{marginTop: 10}} size="small">
              <Form.Item
                label="Tipo de corte"
                name="cutType"
                rules={[{ required: true, message: 'Por favor seleccione el tipo de corte' }]}
              >
                <SelectSearch placeholder="Seleccione tipo de corte" initialData={cutData} />
              </Form.Item>
              <Form.Item
                label={['Rango de fechas']}
                name="range_date"
                rules={[{ required: true, message: 'Por favor seleccione un rango de fechas' }]}
              >
                <RangePicker placeholder={['Fecha inicio', 'Fecha fin']} style={{ width: '100%' }} />
              </Form.Item>
            </Card>
          </Form>
          <FormProducts getExtraData={getExtraData} ref={formProductRef} />
          <Divider />
          <Button type="primary" icon={<SendOutlined />} onClick={sendForm}>Enviar</Button>
        </Col>
        <Col xs={24} md={8}>
          <Resume />
        </Col>
      </Row>
    </>
  );
}

export default FormPromotor;