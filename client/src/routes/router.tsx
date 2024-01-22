
import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import LoginForm from "../components/login/LoginForm";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    )
  },
]);