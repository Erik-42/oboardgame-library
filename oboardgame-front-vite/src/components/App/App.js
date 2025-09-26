import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import Header from "../Header/Header";
import "./App.scss";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import RandomGame from "../RandomGame/Randomgame";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import Library from "../Library/Library";
import Boardgame from "../Boardgame/Boardgame";
import Settings from "../Settings/Settings";
import Tuto from "../Settings/Tuto/Tuto";
import ForgotPassword from "../Login/ForgotPassword/ForgotPassword";
import UpdatePasword from "../Login/UpdatePassword/UpdatePassword";
import React, { useEffect } from "react";
import InstallPWA from "../InstallPWA/InstallPWA";
import { fetchUser } from "../../actions/user";
import Error404 from "../Error404/Error404";

function PrivateRoute({ children, ...rest }) {
  const logged = useSelector((state) => state.userReducer.logged);
  // const logged = localStorage.getItem('logged');

  return logged ? (
    React.cloneElement(children, { ...rest })
  ) : (
    <Navigate to="/connexion" />
  );
}

function usePreventRefresh() {
  const logged = localStorage.getItem("logged");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (logged) {
      dispatch(fetchUser());
    }
  }, [logged, dispatch, navigate]);
}

function Root() {
  usePreventRefresh();
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <InstallPWA />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "connexion",
        element: <Login />,
      },
      {
        path: "inscription",
        element: <Register />,
      },
      {
        path: "mot-de-passe-oublie",
        element: <ForgotPassword />,
      },
      {
        path: "reinitialiser-mot-de-passe/:token",
        element: <UpdatePasword />,
      },
      {
        path: "validation-compte/:token",
        element: <Tuto />,
      },
      {
        path: "bibliotheque",
        element: (
          <PrivateRoute>
            <Library />
          </PrivateRoute>
        ),
      },
      {
        path: "jeux",
        element: (
          <PrivateRoute>
            <Boardgame />
          </PrivateRoute>
        ),
      },
      {
        path: "selection-aleatoire",
        element: (
          <PrivateRoute>
            <RandomGame />
          </PrivateRoute>
        ),
      },
      {
        path: "parametres",
        element: (
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
