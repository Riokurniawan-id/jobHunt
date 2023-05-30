import { BrowserRouter, Routes, Route } from "react-router-dom";
import publicRouters from "./public";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        {publicRouters.map((data) => {
          return (
            <Route element={data.Element} path={data.path} key={data.key} />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
