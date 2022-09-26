import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import DetailPage from "./pages/DetailPage";
import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
