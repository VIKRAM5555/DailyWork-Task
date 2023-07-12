import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Field, Formik, useFormik } from "formik";
import Alert from "@mui/material/Alert";
import * as yup from "yup";
import { useState } from "react";
import { UserContext } from "./App";
import { Login } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { useContext, createContext } from "react";
import { locateContext } from "./App";

export function SignupPage() {
  const { Data, setData } = useContext(locateContext);
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  let validationSchema = yup.object().shape({
    UserName: yup.string().required(),

    password: yup.string().required(),
  });

  const { handleSubmit, handleChange, errors, handleBlur, touched } = useFormik(
    {
      initialValues: {
        Name: "",
        UserName: "",

        password: "",
      },
      validationSchema,
      onSubmit: (values) => {
        setData(values);
        navigate("/Signin");
      },
    }
  );

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="App-header">
        <Typography
          variant="h5"
          style={{
            color: "black",
            letterSpacing: "10px",
            className: "App-header",
          }}
        >
          Register Now
        </Typography>
        <TextField
          id="input-with-icon-textfield"
          label="NAME"
          name="Name"
          InputProps={{
            startAdornment: (
              <IconButton position="start">
                <AccountCircle />
              </IconButton>
            ),
          }}
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.Name && touched.Name ? (
          <Alert severity="error">{errors.Name}</Alert>
        ) : (
          ""
        )}

        <TextField
          id="input-with-icon-textfield"
          label="USERNAME"
          name="UserName"
          InputProps={{
            startAdornment: (
              <IconButton position="start">
                <AccountCircle />
              </IconButton>
            ),
          }}
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.UserName && touched.UserName ? (
          <Alert severity="error">{errors.UserName}</Alert>
        ) : (
          ""
        )}

        <TextField
          id="input-with-icon-textfield"
          label="PASSWORD"
          name="password"
          type={isVisible ? "text" : "password"}
          InputProps={{
            startAdornment: (
              <IconButton
                position="start"
                onClick={() => setIsVisible(!isVisible)}
              >
                {!isVisible ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            ),
          }}
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {errors.password && touched.password ? (
          <Alert severity="error">{errors.password}</Alert>
        ) : (
          ""
        )}

        <Button type="submit" variant="contained" className="Stack">
          <div>Register</div>
        </Button>
      </form>
    </div>
  );
}
