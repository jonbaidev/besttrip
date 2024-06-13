import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from './pages/home/list/List';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/hotels" element={<List />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
