import React, { useEffect, useState } from "react";


export default function AudioChannel ({text, audioUrl, isPlaying, color, isInLoopMode, onEnd}) {
    const [audio, setAudio] = useState(null)
    const [isMute, setIsMute] = useState(false)
    const [fontSize, setFontSize] = useState(3)
    const [timeCursor, setTimeCursor] = useState(0)
  
    useEffect(() => {
        if(audio === null)
        {
            setAudio(new Audio(audioUrl));
        }
    })

    useEffect(() => {
        if(audio != null)
        {
            audio.loop = isInLoopMode
            audio.muted = isMute
            audio.onended  = onEnd;
        }
    })

    useEffect(() => {
        if(audio != null)
        {
            isPlaying  ? audio.play() : audio.load()
        }


    }, [isPlaying]) 

    useEffect(()=>{

        if(audio != null)
        {
                setInterval(() => {

                    setTimeCursor(audio.currentTime)

                 }, 1000);
        }

      })

    return <div style={{backgroundColor: color }} className={"top-container-menu-button"}>
                <div onMouseEnter={() => setFontSize(fontSize === 3 ? 4 : 3)} style={{flex: 11,fontSize: `${fontSize}vh` }}
                    onMouseLeave={()=> setFontSize(fontSize === 4 ? 3 : 4)}>
                        <div style={{position: "absolute", height: "100%", width: "1px", left: `${timeCursor*10}px`, backgroundColor:"red"}}>
                        
                        </div>
                    {text}
                   
                </div>
                <div className="mute-item" onMouseEnter={() => setFontSize(fontSize === 3 ? 4 : 3)} style={{flex: 1, fontSize: `${fontSize}vh` }} onClick={() => setIsMute(!isMute)}
                        onMouseLeave={()=> setFontSize(fontSize === 4 ? 3 : 4)}>
                        {isMute? "UnMute" : "Mute"}
                </div>
           </div>
  }
  