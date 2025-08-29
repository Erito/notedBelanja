import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormPage from "./FormPage";
import FormList from "./FormList";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormPage setUser={setUser} />} />
        <Route path="/FormList" element={<FormList user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;