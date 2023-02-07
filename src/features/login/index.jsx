import React from "react";

export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSubmit = (evt) => {
    evt.preventDefault();
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
