import { Routes, Route } from "react-router-dom";

//local imports
import RouteMiddleware from "./middleware/route-middleware";
import { pageConfigs } from "pages/page-configs";
//styles
import "styles/app-base.css";

const AllRoutes = () => {
  return (
    <Routes>
      {pageConfigs?.map((pageConfig) => {
        return (
          <Route
            key={pageConfig.path}
            path={pageConfig.path}
            element={<RouteMiddleware config={pageConfig} />}
          />
        );
      })}
    </Routes>
  );
};

export default AllRoutes;
