import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import News from './Components/News';

function App() {
  return (
    <>
      <Router>
        {/* Navbar */}
        <Navbar />

        {/* Components Routing */}
        <div className="container p-5">
          <Routes>
            <Route exact path="/" element={<News key="general" category="general"/>}></Route>
            <Route exact path="/business" element={<News key="bussiness" category="business"/>}></Route>
            <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment"/>}></Route>
            <Route exact path="/health" element={<News key="health" category="health"/>}></Route>
            <Route exact path="/science" element={<News key="science" category="science"/>}></Route>
            <Route exact path="/sports" element={<News key="sports" category="sports"/>}></Route>
            <Route exact path="/technology" element={<News key="technology" category="technology"/>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
