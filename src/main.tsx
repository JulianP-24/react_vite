import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./redux/store/index";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import SobreNosotros from "./pages/SobreNosotros";
import Layout from "./components/Layout";
import Rutas from "./pages/Rutas";
import RutasPath from "./pages/RutasPath";
import RutasQueryString from "./pages/RutasQueryString";
import CustomError from "./pages/CustomError";
import Hooks from "./pages/Hooks";
import HooksEventoClick from "./pages/HooksEventoClick";
import Forms from "./pages/Forms";
import SimpleForm from "./pages/SimpleForm";
import Utils from "./pages/Utils";
import DayJsUtils from "./pages/DayJsUtils";
import AlmacenamientoLocal from "./pages/AlmacenamientoLocal";
import LocalStorage from "./pages/LocalStorage";
import SessionStorage from "./pages/SessionStorage";
import Context from "./pages/Context";
import EjemploRedux from "./pages/EjemploRedux";
import AxiosComponent from "./pages/AxiosComponent";
import AxiosCategories from "./pages/AxiosCategories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about-us',
        element: <SobreNosotros />,
      },
      {
        path: '/rutas',
        element: <Rutas />,
      },
      {
        path: '/rutas-path/:id',
        element: <RutasPath />,
      },
      {
        path: '/hooks',
        element: <Hooks />,
      },
      {
        path: '/hooks/evento-click',
        element: <HooksEventoClick />,
      },
      {
        path: '/rutas-query-string',
        element: <RutasQueryString />
      },
      {
        path: '/forms',
        element: <Forms />
      },
      {
        path: '/formulario-simple',
        element: <SimpleForm />
      },
      {
        path: '/utils',
        element: <Utils />
      },
      {
        path: '/dayjsutils',
        element: <DayJsUtils />
      },
      {
        path: '/almacenamientoLocal',
        element: <AlmacenamientoLocal />
      },
      {
        path: '/localStorage',
        element: <LocalStorage />
      },
      {
        path: '/sessionStorage',
        element: <SessionStorage />
      },
      {
        path: '/context',
        element: <Context />
      },
      {
        path: '/redux',
        element: <EjemploRedux />
      },
      {
        path: '/axios',
        element: <AxiosComponent />
      },
      {
        path: '/axios/categorias',
        element: <AxiosCategories />
      },
      {
        path: '*',
        element: <CustomError />
      }
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
