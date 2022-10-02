import { Layout } from "antd";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ContextAuth } from "../../shared/context/auth_context";
import FormPage from "../pages/form";
import LoginPage from "../pages/login";
import NotFoundPage from "../pages/not_found";
import CustomHeader from "../UI/organisms/custom_header";

const { Header, Content, Footer } = Layout;

const PageRoutes = () => {
  const { auth } = useContext(ContextAuth);
  return (
    <>
      {!auth.isAuth && <Routes><Route path="/" element={<LoginPage />} /><Route path="*" element={<NotFoundPage />} /></Routes>}
      {auth.isAuth && (
        <Layout>
          <CustomHeader />
          <main className="site-layout">
            <Routes>
              <Route path="/" element={<FormPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer style={{ textAlign: 'center' }}>Lasanté</Footer>
        </Layout>
      )}
    </>
  );
}

export default PageRoutes;