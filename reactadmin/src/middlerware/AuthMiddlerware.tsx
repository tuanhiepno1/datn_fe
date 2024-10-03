import { PropsWithChildren } from "react";
import { RootState } from '../redux/store';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

type ProtectedRouteProps = PropsWithChildren;

const AuthMiddleware = ({ children }: ProtectedRouteProps) => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  useEffect(() => {

  }, [isAuthenticated, user])
  if (isAuthenticated === false || user === null) {
    navigate('/admin');
  }else{
    return children
  }
}

export default AuthMiddleware;