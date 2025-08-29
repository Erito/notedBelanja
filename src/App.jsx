import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormPage from "./FormPage";
import FormList from "./FormList";
import "./index.css"

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormPage setUser={setUser} />} />
        <Route path="/FormList" element={<FormList user={user} />} />
        <Route path="/notedBelanja" element={<FormPage setUser={setUser} />} />
      </Routes>
    </Router>
  )
}

export default App