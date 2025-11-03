import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";
  import App from "./App";
  import Layout from "./layout/";
  import Home from "./pages/Home";
  
  export default function Main(props) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
          </Route>
          <Route path="/show" element={<Home />} />
        </Routes>
      </Router>
    );
  }
  