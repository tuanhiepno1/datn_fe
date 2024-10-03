import axiosInstance from "../configs/axios";
import { handleAxiosError } from "../helpers/axiosHelper";

// import { useDispatch } from "react-redux";
// import { setAuthLogin } from "../redux/slice/authSlice";
import { User } from "../types/User";
type LoginPayload = {
  email: string;
  password: string;
};

const login = async (payload: LoginPayload): Promise<User | null> => {
  try {
    const response = await axiosInstance.post('/auth/login', {
      email: payload.email,
      password: payload.password
    });

    const user = response.data.user

    // const dispatch = useDispatch();
    // dispatch(setAuthLogin(user)); 

    return user;  
  } catch (error) {
    handleAxiosError(error);
    return null;
  }
};


export { login };