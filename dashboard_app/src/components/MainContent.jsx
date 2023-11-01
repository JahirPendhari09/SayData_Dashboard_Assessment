import styled from "styled-components"
import { Recent_Info } from "./RecentFileSingleVard";
import { useState } from 'react';
import Modal from './Modal';
import '../App.css';

const recentInfoData = [
    {
      id: 1,
      name: "Kamlesh Koli",
      type: "Audio",
      duration: "15 minutes",
      date_of_created: "2023-01-15",
      last_update: "2023-10-20",
      action: "Edit",
    },
    {
      id: 2,
      name: "Chunnu mali",
      type: "Video",
      duration: "30 minutes",
      date_of_created: "2023-02-10",
      last_update: "2023-10-22",
      action: "View",
    },
    {
      id: 3,
      name: "Ashish Patil",
      type: "Video",
      duration: "5 minutes",
      date_of_created: "2023-03-05",
      last_update: "2023-10-25",
      action: "Delete",
    },
    {
      id: 4,
      name: "amol patil",
      type: "Video",
      duration: "20 minutes",
      date_of_created: "2023-04-20",
      last_update: "2023-10-27",
      action: "Download",
    },
    {
      id: 5,
      name: "sakshi Mohite",
      type: "Audio",
      duration: "45 minutes",
      date_of_created: "2023-05-15",
      last_update: "2023-10-30",
      action: "Play",
    },
    {
      id: 6,
      name: "Pradnya mane",
      type: "Audio",
      duration: "10 minutes",
      date_of_created: "2023-06-10",
      last_update: "2023-11-02",
      action: "Edit",
    },
    {
      id: 7,
      name: "Manish zore",
      type: "Video",
      duration: "25 minutes",
      date_of_created: "2023-07-05",
      last_update: "2023-11-05",
      action: "View",
    }
  ];
  
const MainContent = ()=>{
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return<>
    <DIV>
        <div className="topSection" >
            <input style={{width:"85%",paddingLeft:"10px", height:"60%",borderRadius:"5px"}} placeholder="Search here..." type="text"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPLd63aKSW5aeSlp5Z72J0CgS1gnPSvBEveg&usqp=CAU" alt="notification_logo" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBTOg603d6teCcurg5osM1lWw-FEww8azCC0B3sl2-EHMtedVFEbfL2GWqJM4nBz_GGX8&usqp=CAU" alt="profile_logo" style={{ marginRight:"10px"}}/>
        </div>
        <div className="welcomeSection">
            <div>
               <div style={{width:"50%",textAlign:"left"}}>
                   <p style={{fontSize:"20px",marginTop:"10px",fontWeight:"bold"}}>Welcome Shrikant</p>
                    <p style={{fontSize:"12px",marginTop:"-10px"}}>Upload your Audio and Video to convert to text</p>
                </div> 
                <button onClick={openModal}>Transcribe File</button>
            </div>
            <div>
                <div>
                    <div>
                       <p>📁</p>
                    </div>
                    <p style={{fontSize:"1rem", marginTop:"-5px"}}>100</p>
                    <p style={{fontSize:"16px", marginTop:"-10px"}}>Uploaded Files</p>
                </div>
                <div>
                    <div>
                       <p>🏷️</p>
                    </div>
                    <p style={{fontSize:"1rem", marginTop:"-5px"}}>50</p>
                    <p style={{fontSize:"20px", marginTop:"-10px"}}>John Cena</p>
                </div>
                <div>
                    <div>
                       <p>🛒</p>
                    </div>
                    <p style={{fontSize:"1rem", marginTop:"-5px"}}>20</p>
                    <p style={{fontSize:"16px", marginTop:"-10px"}}>Saved</p>
                </div>
            </div>
            <div className="bottomSection">
                <h2 style={{textAlign:'left'}}>Recent Files</h2>
                <hr />
                <table>
                    <thead>
                      <th style={{backgroundColor:"lightblue",color:"green"}} >
                        <td> <input type="checkbox"/> </td>
                        <td>Name</td>
                        <td>Type</td>
                        <td>Duration</td>
                        <td>Date Created</td>
                        <td>Last Update</td>
                        <td>Action</td>
                       </th>
                    </thead>
                    <tbody>
                    {
                        recentInfoData.map(item=>{
                          return <>
                           <hr />
                           < Recent_Info key={item.id} {...item}/>
                          </>
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    </DIV>
        <div>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
           <h2 style={{textAlign:"left",color:"red"}}> Transcribe File</h2>
           <div style={{textAlign:"left"}}>
             <p>Transcription Language</p>
             <select style={{ width:"100%",margin:"auto", height:"30px"}}>
                <option value="" disabled>Default</option>
                <option value="english">English</option>
                <option value="marathi">Marathi</option>
                <option value="hindi">Hindi</option>
             </select>
           </div>
           <input type="file" style={{marginTop:"20px"}}/>
           <div style={{textAlign:"left"}}>
             <p>Import from Link</p>
             <input type="text" placeholder="Paste a Google Drive or YouTube Url" style={{ width:"100%",margin:"auto", height:"30px"}}/>
           </div>
           <div style={{textAlign:"left", marginTop:"10px"}}>
             <input type="checkbox" /> <span> Speaker Identification</span>
           </div>
           <button className="transcribe_btn" >Transcribe File</button>
          </Modal>
       </div>
       </>
}

export {MainContent}


const DIV =styled.div`
    width:100%;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom:50px;

    .topSection{
        width:100%;
        height:8%;
        display:flex; 
        align-items:center;
        justify-content:space-between;
        margin-left:10px;
    }
    .topSection > img{
        width: 4%;
        height: 70%;
        border-radius:50%;
        cursor: pointer;
    }
    
    .welcomeSection{
        width:98%;
        height:90%;
        margin-left:10px;
    }

    .welcomeSection > div:nth-child(1){
        width:98%;
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin-left:10px;
    }

    .welcomeSection > div:nth-child(1) button{
        width:15%;
        height: 35px;
        font-size: 16px;
        border-radius:5px;
        background-color: blue;
        border: 1px solid blue;
        color:white;
    }
    .welcomeSection > div:nth-child(1) button:hover{
        cursor: pointer;
        transition: 0.9s ease;
        transform: scale(1.1);
        background-color:green;
        border:1px solid green;
    }
    

    .welcomeSection > div:nth-child(2){
        width:98%;
        display:flex;
        margin: auto;
        align-items:start;
        justify-content:space-between;
        margin-left:10px;
        gap: 50px;
        margin-top:10px;
    }

    .welcomeSection >div:nth-child(2) > div {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius:10px;
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:start;
        padding-left:20px;
        cursor: pointer;
    }
    .welcomeSection >div:nth-child(2) > div:hover {
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;   
    }

    .bottomSection{
        width:95%;
        margin-left:10px;
        padding-left: 10px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        padding: 15px;
    }
    hr{
        height: 0.5;
    }
    table {
        border-collapse: collapse;
        width: 100%;
    }
    th, td {
        width: 120px;
        padding: 5px;
        text-align: center;
    }
    th:hover{
        background-color: #a3f0a3;
        color:red;
    }
    
`
