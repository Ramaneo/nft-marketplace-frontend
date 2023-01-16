import "./App.css";
import Login from "./routes/login";
import Home from "./routes/home";
import { Route, Routes, Switch } from "react-router";
import { useEffect } from "react";
import { ProtectedRoute } from "./helpers/authHelper";
import { useDispatch } from "react-redux";
import { LOGIN_USER_SUCCESS } from "./redux/actions";

function App(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum
        .request({
          method: "eth_accounts",
        })
        .then((accounts) => {
          if (accounts.length > 0) {
            const account = accounts[0];
            dispatch({
              type: LOGIN_USER_SUCCESS,
              payload: account,
            });
          }
        });
    }
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<ProtectedRoute />}>
        <Route path="/" element={<Home />}>
          {/* <Route path="/" element={<Projects />} /> */}
          {/* <Route path="/companies" element={<Companies />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/project/:id" element={<ProjectTab />} />
          <Route path="/profile/:username/edit" element={<EditProfile />} /> */}
        </Route>
      </Route>
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}

export default App;
