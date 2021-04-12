import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
//INSTALL BREW, FFMPEG, AUDIOSPRITE
//CREATE SPRITE FILES FROM CLI WITH:
//audiosprite --export "webm,mp3" --format "howler2" --output [name] *.wav(or_other_format)
//IMPORT BOTH SPRITE FILES, GIVE THEM NAMES
import { Howl } from "howler";
import webm from "./tracks/sprites.webm"; //HTML5 Audio API
import mp3 from "./tracks/sprites.mp3"; //Web Audio API

class App extends Component {
  //SOUND SPRITE SETUP
  Sprite1 = (src) => {
    const sound = new Howl({
      src: [webm, mp3],
      sprite: {
        loop1: [0, 10055.986394557824],
        loop2: [12000, 10055.986394557824],
      },
      html5: true
    });
    sound.play(src);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <code>
              <button onClick={() => this.Sprite1("loop1")}>Sprite1</button>
              <button onClick={() => this.Sprite1("loop2")}>Sprite2</button>
            </code>
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
