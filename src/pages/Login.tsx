import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { TUser, saveUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const { user, token } = useAppSelector((state) => state.auth);
  const { register, handleSubmit } = useForm({
    defaultValues: { id: "A-1", password: "admin123" },
  });
  const navigate = useNavigate();

  const handleLogin = async (data: { id: string; password: string }) => {
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

  console.log({ user, token });

  return (
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
      <form
        onSubmit={handleSubmit(handleLogin)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div>
          <label htmlFor="id">ID: </label>
          <input {...register("id")} type="text" id="id" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input {...register("password")} type="text" id="password" />
        </div>
        <div>
          <Button htmlType="submit" type="primary">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
