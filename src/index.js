import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Details from "./pages/Details";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./slice/store";
import CommunityRules from "./pages/CommunityRules";
import CreatorTerms from "./pages/CreatorTerms";
import BrandTerms from "./pages/BrandTerms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CreatorDirectory from "./pages/CreatorDirectory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "detail",
    element: <Details />,
  },
  {
    path: "community-rules",
    element: <CommunityRules />,
  },
  {
    path: "creator-terms",
    element: <CreatorTerms />,
  },
  {
    path: "brand-terms",
    element: <BrandTerms />,
  },
  {
    path: "privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "creator-directory",
    element: <CreatorDirectory />,
  },
  {
    path: "*",
    element: <p>not found</p>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
