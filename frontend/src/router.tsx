import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Layout from "./pages/Layout.js";
import Catalog from "./pages/Catalog/Catalog.jsx";
import CardDetails from "./pages/CardDetails/CardDetails.js";
import Contact from "./pages/Contacts/Contact.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="contacts" element={<Contact />} />
      <Route path="catalog" element={<Catalog />} />
      <Route path="catalog/card/:id" element={<CardDetails />} />
    </Route>
  )
);

export default router;
