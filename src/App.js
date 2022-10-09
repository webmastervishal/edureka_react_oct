import "./App.css";
import AppRoute from "./routes/AppRoute";
import UserContext from "./context/UserContext";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("vishal");
  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <AppRoute />;
    </UserContext.Provider>
  );
}

export default App;
