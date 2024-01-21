import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { saveUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const { user, token } = useAppSelector((state) => state.auth);
  const { register, handleSubmit } = useForm({
    defaultValues: { id: "2024010014", password: "safwan" },
  });

  const handleLogin = async (data: { id: string; password: string }) => {
    const user = await login(data).unwrap();
    const userInfo = await verifyToken(user.data.accessToken);
    dispatch(saveUser({ user: userInfo, token: user.data.accessToken }));
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
