import "./App.css";
import heater1 from "./assets/Heater-1.mp3";
import heater2 from "./assets/Heater-2.mp3";
import heater3 from "./assets/Heater-3.mp3";
import heater4 from "./assets/Heater-4.mp3";
import clap from "./assets/Clap.mp3";
import hiHatClosed from "./assets/HiHat-Closed.mp3";
import hiHatOpen from "./assets/HiHat-Open.mp3";
import kickNHat from "./assets/Kick-n-hat.mp3";
import kick from "./assets/Kick.mp3";
import { useState } from "react";

function App() {
  const [displayText, setDisplayText] = useState("");

  document.addEventListener("keydown", (e) => {
    playSound(e.key.toUpperCase());
  });

  const playSound = (letter) => {
    const audio = document.getElementById(letter);
    setDisplayText(audio?.title);
    audio?.play();
  };

  return (
    <>
      <header id="header">
        <h1 id="header_text">Drum Machine</h1>
      </header>
      <div id="drum-machine">
        <section id="drum-pad-container">
          
          <div
            id="heater-1"
            className="drum-pad"
            onClick={() => playSound("Q")}
          >
            Q
            <audio
              id="Q"
              className="clip"
              src={heater1}
              title="Heater 1"
            ></audio>
          </div>

          <div
            id="heater-2"
            className="drum-pad"
            onClick={() => playSound("W")}
          >
            W
            <audio
              id="W"
              className="clip"
              src={heater2}
              title="Heater 2"
            ></audio>
          </div>
          <div
            id="heater-3"
            className="drum-pad"
            onClick={() => playSound("E")}
          >
            E
            <audio
              id="E"
              className="clip"
              src={heater3}
              title="Heater 3"
            ></audio>
          </div>
          <div
            id="heater-4"
            className="drum-pad"
            onClick={() => playSound("A")}
          >
            A
            <audio
              id="A"
              className="clip"
              src={heater4}
              title="Heater 4"
            ></audio>
          </div>
          <div id="clap" className="drum-pad" onClick={() => playSound("S")}>
            S<audio id="S" className="clip" src={clap} title="Clap"></audio>
          </div>
          <div
            id="hihat-open"
            className="drum-pad"
            onClick={() => playSound("D")}
          >
            D
            <audio
              id="D"
              className="clip"
              src={hiHatClosed}
              title="Hi-Hat Open"
            ></audio>
          </div>
          <div
            id="hihat-closed"
            className="drum-pad"
            onClick={() => playSound("Z")}
          >
            Z
            <audio
              id="Z"
              className="clip"
              src={hiHatOpen}
              title="Hi-Hat Closed"
            ></audio>
          </div>
          <div
            id="kick-n-hat"
            className="drum-pad"
            onClick={() => playSound("X")}
          >
            X
            <audio
              id="X"
              className="clip"
              src={kickNHat}
              title="Kick-n-Hat"
            ></audio>
          </div>
          <div id="kick" className="drum-pad" onClick={() => playSound("C")}>
            C<audio id="C" className="clip" src={kick} title="Kick"></audio>
          </div>
        </section>
        <section id="info-container">
          <div id="display">
            <h3 id="display-text">{displayText}</h3>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
