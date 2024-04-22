import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import Single2 from "./pages/single/Single2";
import New from "./pages/new/New";
import New2 from "./pages/new/New2";
import Contact from "./pages/contacts/Contacts";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { contactInputs, productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const { currentUser } = useContext(AuthContext)

  const RequrieAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/login"/>
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route index element={<RequrieAuth><Home /></RequrieAuth>} />
            <Route path="users">
              <Route index element={<RequrieAuth><List /></RequrieAuth>} />
              <Route path=":userId" element={<RequrieAuth><Single /></RequrieAuth>} />
              <Route
                path="new"
                element={<RequrieAuth><New inputs={userInputs} title="Add New User" /></RequrieAuth>}
              />
            </Route>
            <Route path="contacts">
              <Route index element={<RequrieAuth><Contact /></RequrieAuth>} />
              <Route path=":contactId" element={<RequrieAuth><Single2 /></RequrieAuth>} />
              <Route
                path="new"
                element={<RequrieAuth><New2 inputs={contactInputs} title="Add New Contact" /></RequrieAuth>}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
