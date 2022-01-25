import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from "formik"
function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validate: (values) => {
      let errors = {};
      if (!values.password) errors.password = "field required";
      if (!values.email) {errors.email = "field required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
        values.email)
    ) {errors.email = "username should be an email";}
      return errors;
    },

    onSubmit: (values) => {
      alert('Login Successful');
    },




  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email:</div>
          <input
            id="emailField"
            type="text"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email} />
        <br />

        {formik.errors.email ? (
          <div id="emailError" style={{ color: "red" }}>
            {formik.errors.email}
          </div>
        ) : null}
        
        <div>Password:</div>
          <input
            id="pswField"
            type="text"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password} />
        <br />
        
        {formik.errors.password ? (
          <div id="pswError" style={{ color: "red" }}>
            {formik.errors.password}
          </div>
        ) : null}
        
        <button id="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
