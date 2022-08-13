import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from "react-top-loading-bar";
import { useState } from 'react';

function App() {
  const [progress, setProgress] = useState(0);
  let news_api = process.env.REACT_APP_NEWS_API;
  
  return (
    <>
      <LoadingBar color="red" progress={progress} onLoaderFinished={()=>{setProgress(0)}}></LoadingBar>
      
      <Router>
      
        {/* Navbar */}
        <Navbar/>
        {/* Components Routing */}
        <div className="container p-5">
          <Routes>
            <Route exact path="/" element={<News key="general" apiKey={news_api} setProgress={setProgress} category="general"/>}></Route>
            <Route exact path="/business" element={<News key="bussiness" apiKey={news_api} setProgress={setProgress} category="business"/>}></Route>
            <Route exact path="/entertainment" element={<News key="entertainment" apiKey={news_api} setProgress={setProgress} category="entertainment"/>}></Route>
            <Route exact path="/health" element={<News key="health" apiKey={news_api} setProgress={setProgress} category="health"/>}></Route>
            <Route exact path="/science" element={<News key="science" apiKey={news_api} setProgress={setProgress} category="science"/>}></Route>
            <Route exact path="/sports" element={<News key="sports" apiKey={news_api} setProgress={setProgress} category="sports"/>}></Route>
            <Route exact path="/technology" element={<News key="technology" apiKey={news_api} setProgress={setProgress} category="technology"/>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
