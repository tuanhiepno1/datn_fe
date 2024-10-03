// import { useEffect } from "react";
// import { useToast } from "../contexts/ToastContext";

// import { showNotify } from "../helpers/myHelper";
// import { RootState } from '../redux/store';

// import { useSelector, useDispatch } from "react-redux";
// import { showToast } from "../helpers/myHelper";

// import { clearToast } from "../redux/slice/toastSlice";
// import { useEffect } from 'react';
// import { RootState } from '../redux/store';
// import { useSelector } from "react-redux";
const Dashboard = () => {
  // const { message, type, setMessage } = useToast()

  // const { message, type } = useSelector((state: RootState) => state.toast);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   showToast(message, type);
  //   dispatch(clearToast());
  // }, [message, type]);
  // const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  // useEffect(() => {
  //   console.log(isAuthenticated, user);
  // }, [isAuthenticated, user]);

  return ( 
    <div>
      Đây là trang Dashboard nè 
    </div>
  );

};

export default Dashboard;