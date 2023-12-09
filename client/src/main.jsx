// import React from "react";
// import ReactDOM from "react-dom/client";
// import { RouterProvider } from "react-router-dom";


// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";
// import "./index.css";
// import router from "./router";
// import "./firebase/config";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//       <RouterProvider router={router} />
//   </React.StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";
import router from "./router";
import "./firebase/config";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  console.error("Root element with id 'root' not found");
}
