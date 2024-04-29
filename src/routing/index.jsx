import { Route, Routes } from "react-router";
import Home from "../page/Home";
import About from "../page/About";
import Contact from "../page/Contact/";
import UsersWithStatePage from "../page/UsersWithStatePage";
import UsersWithReducerPage from "../page/UsersWithReducerState";
import ProductsPage from "../page/Products";
import ReduxPage from "../page/Redux";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users-state" element={<UsersWithStatePage />} />
        <Route path="/users-reducer" element={<UsersWithReducerPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/redux" element={<ReduxPage />} />


      </Routes>
    </>
  );
};
export default Routing;
