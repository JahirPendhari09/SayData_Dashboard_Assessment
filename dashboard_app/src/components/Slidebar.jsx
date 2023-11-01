
import {styled } from "styled-components"

const Slider = ()=>{
    return <DIV >
      <h3 style={{height:"3%"}}>ABC Firm</h3>
      <div className="mainSection">
        <div className="midSection">
            <div>
                <img src={"https://www.freepnglogos.com/uploads/logo-home-png/chimney-home-icon-transparent-1.png"} alt="Home_logo"/>
                <p>Home</p>
            </div>
            <div>
               <img src={"https://www.creativefabrica.com/wp-content/uploads/2021/06/22/Folder-Icon-Template-Design-Vector-Graphics-13725642-1-1-580x387.jpg"} alt="All_files_logo"/>
               <p>All Files</p>
            </div>
          
            <div>
               <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzuYo1lFN-NmtG25jAIAjYJoGpm2dP5hDrgrHk3gmvaCXXDCfkajjyKCbqi72Llqic9KI&usqp=CAU"} alt="Saved_Doc_logo"/>
               <p>Saved</p>
            </div>
            <div>
                <img src={"https://png.pngtree.com/png-vector/20190418/ourmid/pngtree-vector-share-icon-png-image_956058.jpg"} alt="Integration_logo"/>
                <p>Integrations</p>
            </div>
            <div>
                <img src={"https://cdn-icons-png.flaticon.com/512/2891/2891491.png"} alt="Trash_logo"/>
                <p>Trash</p>
            </div>
            <div>
                <img src={"https://cdn-icons-png.flaticon.com/512/70/70314.png"} alt="Setting_logo"/>
                <p>Settings</p>
            </div>
            <div>
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_x-XK2uYKaC0bgIHqATWHJpIzz6cyg3N3SQ&usqp=CAU"} alt="Help_and_support_logo"/>
                <p>Help and Support</p>
            </div>
           
        </div>
        <div className="bottomSection">
            <div>
                <h4>Upgrade Account</h4>
                <p>Access to unlimiited Transcription</p>
                <button>Upgrade</button>
            </div>
        </div>
      </div>
    </DIV>
}

export {Slider}

const DIV = styled.div`
    width:20%;
    /* border:2px solid blue; */
    display: flex;
    flex-direction: column;
    /* height:600px; */
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;


    img{
        width:12%;
        height:60%;
    }
    .mainSection{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%; 
    }
    .midSection{
        width: 80%;
        margin: auto;
        font-size: 12px;
        margin-top:10px;
    }
    .midSection > div{
        display: flex;
        align-items:center;
        gap: 10px;
        height: 30px;
        cursor: pointer;
    }

    .midSection > div:hover{
        background-color: #cacadc;
        color:red;
    }
    .bottomSection{
        width: 80%;
        margin: auto;
        margin-bottom:10px;
        border-radius:10px;
        background-color:lightblue;
        padding: 5px;
    }
    .bottomSection p{
        font-size: 12px;
    }

    button{
        height: 30px;
        width: 80%;
        background-color: blue;
        border:1px solid blue;
        color:white;
        border-radius:5px;
        margin-bottom:10px;
    }

    button:hover{
        cursor: pointer;
        transition: 0.9s ease;
        transform: scale(1.1);
        background-color:green;
        border:1px solid green;
    }
`