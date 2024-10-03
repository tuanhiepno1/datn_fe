import { useForm, SubmitHandler } from "react-hook-form";
import { login } from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setToast } from "../redux/slice/toastSlice";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import { setAuthLogin } from "../redux/slice/authSlice";
import { Loader2 } from "lucide-react";
type Inputs = {
  email: string;
  password: string;
};
const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const [loading, setLoading] = useState<boolean>(false); 

  const loginHandler: SubmitHandler<Inputs> = async (payload) => {
    
    setLoading(true);
    setErrorMessage('');

    try {
      const auth = await login(payload);
      dispatch(setToast({ message: 'Đăng nhập vào hệ thống thành công', type: 'success' }));
      dispatch(setAuthLogin(auth));
      auth && navigate('/dashboard');
    } catch (error) {
      console.log(error);
      // setErrorMessage('An error occurred during login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-5xl flex flex-col md:flex-row p-6 bg-white rounded animate-fade-in-down">
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-4">Welcome to IN+</h2>
          <p className="mb-2">
            Perfectly designed and precisely prepared admin theme with over 50
            pages with extra new web app views.
          </p>
          <p className="mb-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <p className="mb-2">
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen book.
          </p>
        </div>

        <div className="md:w-1/2 p-8 shadow-lg">
          <form onSubmit={handleSubmit(loginHandler)} className="mt-8 space-y-6">
            <div>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Email"
                {...register("email", { 
                  required: "Bạn phải nhập vào email", 
                  pattern: { 
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Email không hợp lệ"
                  }
                })}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>
            <div>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Mật khẩu"
                {...register("password", { 
                  required: "Bạn phải nhập vào mật khẩu" 
                })} 
              />
              {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
            </div>
            
            {errorMessage && <div className="text-red-500 text-sm">{errorMessage}</div>}

            {/* <button
              type="submit"
              disabled={loading}
              className={`w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 ${loading ? 'opacity-50' : ''}`}
            >
              {loading ? "Loading..." : "Đăng nhập"}
            </button> */}
              <Button disabled={loading} className="w-full bg-blue-500 text-white py-2 rounded-md
             hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
                {/* <Loader2 className="mr-2 h-4 w-4 animate-spin" /> */}
                { loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                {  loading ? 'Đang xử lý' : 'Đăng nhập'}
              </Button>
            <button 
              type="button" 
              className="text-sm text-blue-500 hover:underline"
              onClick={() => navigate('/forgot-password')}
            >
              Quên mật khẩu ?
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600 text-left">
            Inspinia web app framework base on Bootstrap 3 &copy; 2014
            {/* <QRCode value="Inspinia web app framework base on Bootstrap 3 &copy; 2014" />  */}
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
