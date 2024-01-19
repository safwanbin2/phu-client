import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: { id: "2024010014", password: "safwan" },
  });
  const [login, { data, error }] = useLoginMutation();

  const handleLogin = async (data: { id: string; password: string }) => {
    await login(data);
  };

  console.log({ data, error });

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
