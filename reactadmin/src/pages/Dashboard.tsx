import { useEffect } from "react";
// import { useToast } from "../contexts/ToastContext";

// import { showNotify } from "../helpers/myHelper";
import { RootState } from '../redux/store';

import { useSelector, useDispatch } from "react-redux";
import { showToast } from "../helpers/myHelper";

import { clearToast } from "../redux/slice/toastSlice";

const Dashboard = () => {
  // const { message, type, setMessage } = useToast()

  const { message, type } = useSelector((state: RootState) => state.toast);
  const dispatch = useDispatch();

  useEffect(() => {
    showToast(message, type);
    dispatch(clearToast());
  }, [message, type]);

  return (
    <>
      <div>
        Đây là trang Dashboard nè
      </div>
    </>
  );
};

export default Dashboard;