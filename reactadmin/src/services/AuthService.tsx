import axiosInstance from "../configs/axios";

type LoginPayload = {
  email: string;
  password: string;
};

const login = async (payload: LoginPayload): Promise<boolean> => {
  try {
    await axiosInstance.post("/auth/login", {
      email: payload.email,
      password: payload.password,
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export { login };