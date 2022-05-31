import React, { useEffect, useState } from "react";
import AudioChannel from "./components/AudioChannel";
import Simplebutton from "./components/SimpleButton"


function App() {
  const [width, setWidth] = useState(100)
  const [play, setPlay] = useState(false)
  const [inLoopMode, setInLoopMode] = useState(false)

  const colors = ["#ffcccc", "#ffccff", "#ff99ff", "#ff66ff","#ff00ff", "#cc33ff","#cc66ff", "#cc99ff","#ccccff"]
  const tracksUrls = ["_tambourine_shake_higher", "ALL TRACK", "B VOC", "DRUMS",
   "HE HE VOC", "HIGH VOC", "JIBRISH", "LEAD 1", "UUHO VOC"]


  return (
    <div className={"app-container"}>
          <div className={"top-container"}>
              <div className={"top-container-menu"}>
                  <Simplebutton onClick={()=> setPlay(true)} text={"PLAY"}/>
                  <Simplebutton onClick={()=> setPlay(false)}  text={"PAUSE"}/>
                  <Simplebutton onClick={()=> setInLoopMode(!inLoopMode)}  text={inLoopMode ? "UNLOOP" : "LOOP"}/>
              </div>
              
              <div className={"top-container-body"}>
                  {
                    tracksUrls.map((trackUrl, index) => (
                        <AudioChannel 
                          key={index}
                          isPlaying={play} 
                          onEnd={()=>(setPlay(false))}
                          isInLoopMode={inLoopMode}
                          audioUrl={`${trackUrl}.mp3`} 
                          text={`${trackUrl}` }
                          color={`${colors[index]}` 
                    }/>))
                  }
              </div>
              
          </div>
          
    </div>
  );
}

export default App;
