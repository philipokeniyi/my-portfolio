import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Work from "./components/Work/Work.jsx";
import Blog from "./components/Blog/Blog.jsx";
import Contact from "./components/Contact/Contact.jsx";
import CleanerCode from "./components/Blog-contents/CleanerCode.jsx";
import SimpleWebApp from "./components/Blog-contents/SimpleWebApp.jsx";
import JavaScriptFrameworks from "./components/Blog-contents/JavaScriptFrameworks.jsx";
import AsyncVsSync from "./components/Blog-contents/AsyncVsSync.jsx";
import FetchAsyncAPI from "./components/Blog-contents/FetchAsyncAPI.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="work" element={<Work />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact" element={<Contact />} />
      <Route path="blog/cleaner-code" element={<CleanerCode />} />
      <Route path="blog/simple-web-app" element={<SimpleWebApp />} />
      <Route
        path="blog/javascript-frameworks"
        element={<JavaScriptFrameworks />}
      />
      <Route path="blog/async-vs-sync" element={<AsyncVsSync />} />
      <Route path="blog/fetch-async-api" element={<FetchAsyncAPI />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
