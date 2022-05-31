import React, { useEffect, useState } from "react";
////try
export default function AudioButton ({text, audioUrl, isPlaying, color, isInLoopMode, onEnd}) {
    const [audio, setAudio] = useState(null)
    const [isMute, setIsMute] = useState(false)
    const [fontSize, setFontSize] = useState(3)
    const [reload, setReload] = useState(false)
    const [timeCursor, setTimeCursor] = useState(0)
  
    useEffect(() => {
        if(audio == null)
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
        //const set interval
        //add remove event listener
        setInterval(() => {

            setTimeCursor(audio.currentTime)
            //console.log(audio.currentTime)
        
     // console.log("hey")
    }, 1000);
}

      })

    
    return <div style={{  backgroundColor: color}} className={"top-container-menu-button"}>
                <div onMouseEnter={() => setFontSize(fontSize === 3 ? 4 : 3)} style={{flex: 8,fontSize: `${fontSize}vh` }}
                onMouseLeave={()=> setFontSize(fontSize === 4 ? 3 : 4)}>
                        <div style={{position: "absolute", height: "100%", width: "1px", left: `${timeCursor*10}px`, backgroundColor:"red"}}>
                        
                        </div>
                    {text}
                   
                </div>
                

                
                <div className="list-time" onMouseEnter={() => setFontSize(fontSize === 3 ? 4 : 3)} style={{flex: 1, fontSize: `${fontSize}vh` }} onClick={() => setIsMute(!isMute)}
                        onMouseLeave={()=> setFontSize(fontSize === 4 ? 3 : 4)}>
                        {isMute? "UnMute" : "Mute"}
                </div>
           </div>
  }
  