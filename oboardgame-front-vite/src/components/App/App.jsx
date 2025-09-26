import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import InstallPWA from "../InstallPWA/InstallPWA";
import { fetchUser } from "../../actions/user_actions";
import Error404 from "../Error404/Error404";
// ... autres imports nécessaires

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div className="app">
      {/* Votre structure de routage et de mise en page ici */}
      <Routes>
        {/* Vos routes ici */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
