import { MainContent } from "./MainContent"
import { Slider } from "./Slidebar"

const Dashboard =()=>{
    return <>
    <div style={{display:"flex",justifyContent:"space-around", 
       width:"90%",margin:"auto", marginTop:"50px" ,border:"2px solid green",
       marginBottom:"30px"
      }}
    >
        <Slider/>
        <MainContent/>
    </div>
    </>
}

export {Dashboard}