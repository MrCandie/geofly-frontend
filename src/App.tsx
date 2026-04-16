import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { lazy, Suspense } from "react";

import "./App.css";
import NotFound from "./pages/not-found";
import Spinner from "./component/spinner";
import { useAuth } from "./context/auth";

const Login = lazy(() => import("./pages/auth/login"));
const Signup = lazy(() => import("./pages/auth/register"));
const Home = lazy(() => import("./pages/home/home"));

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  const unauth = [
    "/",
    "/restaurants/list",
    "/login",
    "/register",
    "/forgot-password",
    "/reset-password",
    "/verify",
    "/complete-onboarding",
  ];

  const isExactUnauth = unauth.includes(location.pathname);

  const isUnauthPath =
    isExactUnauth ||
    unauth.some((path) => location.pathname.startsWith(path) && path !== "/");

  if (!isAuthenticated && !isUnauthPath) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

// Create routes
const routes = createRoutesFromElements(
  <Route>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Signup />} />

    <Route element={<ProtectedRoute />}>
      <Route path="/" element={<Home />} />
    </Route>

    <Route path="*" element={<NotFound />} />
  </Route>,
);

const router = createBrowserRouter(routes);

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
