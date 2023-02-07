import React from "react";
import { useLogin } from "../../shared/auth";

export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { login } = useLogin()

  const onSubmit = (evt) => {
    evt.preventDefault();
    login({ email, password });
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>
          email
          <input onChange={(evt) => setEmail(evt.target.value)} />
        </label>
      </div>

      <div>
        <label>
          password
          <input onChange={(evt) => setPassword(evt.target.value)} />
        </label>
      </div>

      <div>
        <button type='submit'>submit</button>
      </div>
    </form>
  );
};
