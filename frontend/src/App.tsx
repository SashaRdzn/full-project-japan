import { RouterProvider } from "react-router-dom";
import router from "./core/Router/router";

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
