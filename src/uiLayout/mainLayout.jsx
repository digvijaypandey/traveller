import { Header } from "../uiLayout/header";
import { Footer } from "../uiLayout/footer";
import { Outlet } from "react-router-dom";

export const MainComponent = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
