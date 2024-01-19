
import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import LoginForm from "../components/login/LoginForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />
  },
  {
    path: "/dashboard",
    element: <App />
  },
]);