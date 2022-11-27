import Dashboard from "../components/dashboard/Dashboard";
import Layout from "../components/layout/Layout";
import { store } from "../store";
import { Provider } from "react-redux";

export default function Index() {
  return (
    <Provider store={store}>
      <Layout title="Home Layout">
        <Dashboard />
      </Layout>
    </Provider>
  );
}
