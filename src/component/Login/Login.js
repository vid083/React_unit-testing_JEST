import React, { useState } from "react";

export const validateInput = (str = "") => str.includes("@");

function Login() {
  const [formData, setFormData] = useState({});

  const handleOnChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));

    // console.log({formData});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <form name="login-form" onSubmit={handleSubmit}>
      <label>Email:</label>

      <input id="email" name="email" onChange={handleOnChange} />

      <br />

      {formData.email && !validateInput(formData.email) ? <p>error</p> : null}

      <label>Password:</label>

      <input name="password" type="password" onChange={handleOnChange} />

      <br />

      <input type="submit" value="Submit" />
    </form>
  );
}

export default Login;
