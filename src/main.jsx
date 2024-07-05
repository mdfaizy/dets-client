
// import App from "./App.jsx";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import { Toaster } from "react-hot-toast";
// import { Provider } from 'react-redux'
// // import store from "./redux/store.js";
// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./redux/reducer/index.js";
// const store= configureStore({
//   reducer: rootReducer,
// });
// const root = createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter>
 

//   <Provider store={store}>
// <Asi

//     <App />
//     <ToastContainer />
//     <Toaster/>
//   </Provider>
//   </BrowserRouter>
// );













import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/reducer/index.js";
import { SidebarProvider } from "./utils/context/Context.jsx"; // Assuming you have a SidebarContextProvider

const store = configureStore({
  reducer: rootReducer,
});

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <SidebarProvider>
        <App />
        <ToastContainer />
        <Toaster />
      </SidebarProvider>
    </Provider>
  </BrowserRouter>
);
