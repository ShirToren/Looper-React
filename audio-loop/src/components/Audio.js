import React, { useEffect, useState } from "react";

export default function AudioButton ({text, audioUrl, isPlaying, color, isInLoopMode, onEnd}) {
    const [audio, setAudio] = useState(new Audio(audioUrl))
    const [isMute, setIsMute] = useState(false)
    const [fontSize, setFontSize] = useState(3)
    const [reload, setReload] = useState(false)
    const [timeCursor, setTimeCursor] = useState(0)
  
    useEffect(() => {
        audio.loop = isInLoopMode
        audio.muted = isMute
        audio.onended = onEnd;
    })

    useEffect(() => {
        
      isPlaying  ? audio.play() : audio.load()

    }, [isPlaying]) 

    useEffect(()=>{

        //const set interval
        //add remove event listener
        setInterval(() => {
            if(isPlaying)
            {
                setTimeCursor(audio.currentTime)
                console.log(audio.currentTime)
            }
          console.log("hey")
        }, 1000);
      })

    
    return <div style={{backgroundColor: color}} className={"top-container-menu-button"}>
                <div onMouseEnter={() => setFontSize(fontSize === 3 ? 4 : 3)} style={{flex: 8,fontSize: `${fontSize}vh` }}
                onMouseLeave={()=> setFontSize(fontSize === 4 ? 3 : 4)}>
                    {text}
                </div>
                <div style={{height: "100%", width: "10px", backgroundColor:"blue"}}>
                    <div style={{position: "absolute", height: "100%", width: "10px", left: `${timeCursor*10}px`, backgroundColor:"yellow"}}>
                        
                    </div>
                </div>
                <div className="list-time" onMouseEnter={() => setFontSize(fontSize === 3 ? 4 : 3)} style={{flex: 1, fontSize: `${fontSize}vh` }} onClick={() => setIsMute(!isMute)}
                        onMouseLeave={()=> setFontSize(fontSize === 4 ? 3 : 4)}>
                        {isMute? "UnMute" : "Mute"}
                </div>
           </div>
  }
  