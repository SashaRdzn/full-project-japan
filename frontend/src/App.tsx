import { RouterProvider } from "react-router-dom";
import router from "./core/Router/router";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />;
    </>
  );
};
export default App;
