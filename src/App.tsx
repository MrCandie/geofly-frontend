import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  RouterProvider,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

import "./App.css";
import NotFound from "./pages/not-found";
import Spinner from "./component/spinner";
import { useAuth } from "./context/auth";

const Login = lazy(() => import("./pages/auth/login"));
const Signup = lazy(() => import("./pages/auth/register"));
const Home = lazy(() => import("./pages/home/home"));

const ProtectedRoute = () => {
  const { isAuthenticated, login } = useAuth();
  const [searchParam] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const token = searchParam.get("token");
  const email = searchParam.get("email");
  const name = searchParam.get("name");

  useEffect(() => {
    if (token && email && name) {
      login({ email, fullName: name }, token);

      navigate("/", { replace: true });
    }
  }, [token, email, name, login, navigate]);

  const unauth = ["/login", "/register"];

  const isUnauthPath =
    unauth.includes(location.pathname) ||
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
