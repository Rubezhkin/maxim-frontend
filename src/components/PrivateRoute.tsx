import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
export default PrivateRoute;
