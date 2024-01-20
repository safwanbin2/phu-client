import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { saveUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: { id: "2024010014", password: "safwan" },
  });
  const [login, { error }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const { user, token } = useAppSelector((state) => state.auth);

  const handleLogin = async (data: { id: string; password: string }) => {
    const userData = await login(data).unwrap();
    dispatch(
      saveUser({
        user: verifyToken(userData.data.accessToken),
        token: userData.data.accessToken,
      })
    );
  };

  console.log({ user, token, error });

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
