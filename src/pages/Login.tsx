import { Button } from "antd";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { TUser, saveUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHform from "../components/form/PHform";
import PHinput from "../components/form/PHinput";

const Login = () => {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const { user, token } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleLogin = async (data: { id: string; password: string }) => {
    console.log(data);
    toast.loading("Logging in", { id: "authLoading", duration: 2000 });
    const user = await login(data).unwrap();
    const userInfo = (await verifyToken(user.data.accessToken)) as TUser;
    dispatch(saveUser({ user: userInfo, token: user.data.accessToken }));
    toast.success("Logged in successfully", {
      id: "authLoading",
      duration: 2000,
    });
    navigate(`/${userInfo.role}/dashboard`);
  };
  console.log({ token, user });
  return (
    <PHform onSubmit={handleLogin}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <h2>Login</h2>
        <div>
          <label htmlFor="id">ID: </label>
          <PHinput name="id" type="text" key="id" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <PHinput name="password" type="text" key="password" />
        </div>
        <div>
          <Button htmlType="submit" type="primary">
            Login
          </Button>
        </div>
      </div>
    </PHform>
  );
};

export default Login;
