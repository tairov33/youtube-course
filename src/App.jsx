import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Category from './pages/Category';
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/category/:type" element={<Category/>}/>
      </Routes>
      </div>
    </Router>

  )
}

export default App;
