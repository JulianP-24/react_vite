import { Outlet } from "react-router-dom";
import Header from "./Header";
import ejemploContext  from "../context/Provider";

const Layout = () => {
  return (
    <>
      <ejemploContext.exampleProvider value = {''}>
      <Header />
      <main className="container is-fluid">
        <Outlet />
      </main>
      </ejemploContext.exampleProvider>
    </>
  );
};

export default Layout;
