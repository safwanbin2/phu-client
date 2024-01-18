import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { changeTheme } from "../redux/features/themeSlice";

const About = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.theme);
  console.log(theme);
  return (
    <div>
      <h2>about</h2>
      <button onClick={() => dispatch(changeTheme())}>Change to Dark</button>
    </div>
  );
};

export default About;
