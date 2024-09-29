import { Layout } from "antd";
import { Requests } from "./pages/Requests";
import { Create } from "./pages/Create/Create";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer";
import { CreateOrder } from "./pages/CreateOrder/CreateOrder";
import { UserRequests } from "./pages/UserRequests/UserRequests";
import { CreateDeliver } from "./pages/CreateDeliver/CreateDeliver";

const { Content } = Layout;

export const App = () => (
  <Layout className="min-h-screen flex flex-col justify-between">
    <Header />
    <Content className="p-9 px-12">
      <div className="container mx-auto">
        <Routes>
          <Route path="/:id/create" element={<Create />} />
          <Route path="/:id/create/order" element={<CreateOrder />} />
          <Route path="/:id/create/deliver" element={<CreateDeliver />} />
          <Route path="/:id" element={<UserRequests />} />
          <Route path="/:id/requests" element={<UserRequests />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="*" element={<Requests />} />
        </Routes>
      </div>
    </Content>
    <Footer />
  </Layout>
);
