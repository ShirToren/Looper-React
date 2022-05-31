import React, { useEffect, useState } from "react";
import AudioButton from "./Audio";

function ListCell ({color, text, url}) {

  const playSound = () => {
 
  
  }

  return (
    <div onClick={() => {playSound()}} className="list-time">
      {text}
    </div>
  )
}


function Simplebutton ({text, onClick}) {

  return <button onClick={onClick} className={"top-container-menu-button"}>
            {text}
         </button>
}




function App() {
  const [style, setStyle] = useState("aaaaa")
  const [width, setWidth] = useState(100)
  const [play, setPlay] = useState(false)
  const [inLoopMode, setInLoopMode] = useState(false)

  const colors = ["#ffcccc", "#ffccff", "#ff99ff", "#ff66ff","#ff00ff", "#cc33ff","#cc66ff", "#cc99ff","#ccccff"]
  const tracksUrls = ["_tambourine_shake_higher", "ALL TRACK", "B VOC", "DRUMS",
   "HE HE VOC", "HIGH VOC", "JIBRISH", "LEAD 1", "UUHO VOC"]



console.log("app");
  return (
    <div onClick={() => setWidth(width - 10)} className={"app-container"}>
          <div className={"top-container"}>
              <div className={"top-container-menu center-flex-text text-style"}>
                  <Simplebutton onClick={()=> setPlay(true)} text={"play"}/>
                  <Simplebutton onClick={()=> setPlay(false)}  text={"pause"}/>
                  <Simplebutton onClick={()=> setInLoopMode(!inLoopMode)}  text={inLoopMode ? "UnLoop" : "Loop"}/>
              </div>
              
                  <div className={"top-container-body"}>
                    {
                      tracksUrls.map((trackUrl, index) => (
                          <AudioButton 
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
          <div className={"bottom-container"}>
          <div style={{height: "100%", width: "100%", backgroundColor:"blue"}}>
              <div style={{height: "100%", width: `${width}%`, backgroundColor:"yellow"}}>

              </div>
            </div>
            <div style={{height: "100%", width: "100%", backgroundColor:"blue"}} className={"top-container-menu center-flex-text text-style"}>
                  <Simplebutton onClick={()=> setPlay(true)} text={"play"}/>
                  <Simplebutton onClick={()=> setPlay(false)}  text={"pause"}/>
                  <Simplebutton onClick={()=> setInLoopMode(!inLoopMode)}  text={inLoopMode ? "UnLoop" : "Loop"}/>
              </div>
          </div>
    </div>
  );
}

export default App;
