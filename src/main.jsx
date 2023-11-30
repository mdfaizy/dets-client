// import ReactDOM from 'react-dom';
// import App from './App.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';
// // import { Toaster } from "react-hot-toast";
// import { BrowserRouter } from "react-router-dom";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <Toaster />
//     <App />
//   </BrowserRouter>
// );

import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
    <ToastContainer />
  </BrowserRouter>
);
