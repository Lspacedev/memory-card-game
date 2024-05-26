import { useEffect, useState } from "react";
import "./App.css";

function Card({ id, handleRandom, handleClick }) {
  const [src, setSrc] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`, { mode: "cors" })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        setSrc(response.sprites.front_default);
      });
  }, [id]);
  return (
    <div
      className="card"
      onClick={() => {
        handleRandom(id);
        handleClick(id);
      }}
    >
      <img src={src}></img>
    </div>
  );
}

function App() {
  const [id, setId] = useState(0);
  const [scoreDisplay, setScore] = useState(0);
  const [bestScoreDisplay, setBestScore] = useState(0);

  let score = 0;
  let bestScore = 0;
  let store = [];

  function handleClick(id) {
    //if store array contains clicked id
    if (store.includes(id)) {
      //check if best score is  0 or latest score is greater than best score
      if (bestScore == 0 || score >= bestScore) {
        //update best score
        bestScore = score;
        setBestScore(score);

        //reset score && store array
        setScore(0);
        score = 0;
        store = [];
      }
      //reset score && store array
      setScore(0);
      score = 0;
      store = [];
    } else {
      store.push(id);
      score++;
      setScore((score) => score + 1);
      setId(id);
    }
  }

  const [arr, setArr] = useState([
    <Card
      key={1}
      id={1}
      handleRandom={handleRandom}
      handleClick={handleClick}
    ></Card>,
    <Card
      key={2}
      id={2}
      handleRandom={handleRandom}
      handleClick={handleClick}
    ></Card>,
    <Card
      key={3}
      id={3}
      handleRandom={handleRandom}
      handleClick={handleClick}
    ></Card>,
    <Card
      key={4}
      id={4}
      handleRandom={handleRandom}
      handleClick={handleClick}
    ></Card>,
    <Card
      key={5}
      id={5}
      handleRandom={handleRandom}
      handleClick={handleClick}
    ></Card>,
    <Card
      key={6}
      id={6}
      handleRandom={handleRandom}
      handleClick={handleClick}
    ></Card>,
    <Card
      key={10}
      id={10}
      handleRandom={handleRandom}
      handleClick={handleClick}
    ></Card>,
    <Card
      key={57}
      id={57}
      handleRandom={handleRandom}
      handleClick={handleClick}
    ></Card>,
    <Card
      key={13}
      id={13}
      handleRandom={handleRandom}
      handleClick={handleClick}
    ></Card>,
    <Card
      key={40}
      id={40}
      handleRandom={handleRandom}
      handleClick={handleClick}
    ></Card>,
    <Card
      key={15}
      id={15}
      handleRandom={handleRandom}
      handleClick={handleClick}
    ></Card>,
    <Card
      key={7}
      id={7}
      handleRandom={handleRandom}
      handleClick={handleClick}
    ></Card>,
  ]);

  function handleRandom() {
    let shuffled = arr
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    setArr(shuffled);
  }

  return (
    <div className="container">
      <div className="header">
        <div className="heading">
          <div className="h1">Pokemon</div>
          <p>Memory Game Board</p>
        </div>
        <div className="board">
          <p>{"Score: " + scoreDisplay}</p>
          <p>{"Best score: " + bestScoreDisplay}</p>
        </div>
      </div>
      <div className="cards">
        {arr.map((card) => {
          return card;
        })}
      </div>
    </div>
  );
}
export default App;
