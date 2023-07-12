import React from "react";
import { useContext } from "react";
import { locateContext } from "./App";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
export function Welcome() {
  const navigate = useNavigate();
  const { Data, setData } = useContext(locateContext);
  const handleLogout = () => {
    setData({});
    navigate("/Signin");
  };
  return (
    <div>
      <Button
        onClick={handleLogout}
        variant="contained"
        className="Stack"
        sx={{ marginRight: "-90%", marginTop: "10px" }}
      >
        <div>Log out</div>
      </Button>
      <table>
        <tr>
          <th>Name</th>
          <th>UserName</th>
        </tr>
        <tr>
          <td>{Data.Name}</td>
          <td>{Data.UserName}</td>
        </tr>
      </table>
    </div>
  );
}
