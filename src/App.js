import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';
import { useState } from 'react';
import axios from 'axios';


function App() {

  const [question, setQuestion] = useState()
  const [result, setResult] = useState(0)
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const fetchQuestion = async (difficulty = '', category = '') => {
    const { data } = await axios.get(`https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`);

    console.log(data);
  };
  return (
    <div className="app" style={{ backgroundImage: "url(./ques1.png)" }}>

      <BrowserRouter>
        <Header></Header>
        <Routes>

          <Route path="/" element={<Home fetchQuestion={fetchQuestion} />}> </Route>
          <Route path="quiz" element={<Quiz />}> </Route>
          <Route path="result" element={<Result />}> </Route>

        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
