
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from 'react-redux'
import store from "./redux/store.js";
const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
 

  <Provider store={store}>


    <App />
    <ToastContainer />
  </Provider>
  </BrowserRouter>
);
