import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalFloatButton from "./components/FloatButton";
import Breadcrumbs from "./components/Navbar/Breadcrumbs";

const App = () => {
  return (
    <div className="flex flex-col">
      <ScrollRestoration />
      {/* <Header2 /> */}
      <Header />
      <Breadcrumbs />
      <Outlet />
      <GlobalFloatButton />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
