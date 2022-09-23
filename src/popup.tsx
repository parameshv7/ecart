import { Dialog ,DialogTitle,DialogContent, Paper, Divider, Icon} from "@mui/material";
import React from "react";
import ClearIcon from '@mui/icons-material/Clear';
const Popup=(props:any)=>{
    const {openPopup,children, setOpenPopup}=props;
    return(
        <div>
            <Dialog className="mainClass" open={openPopup} maxWidth="sm" fullWidth>
                <div style={{display:'flex'}}>
                <DialogTitle style={{flexGrow:1}}>Trainer Add Form</DialogTitle>
                <ClearIcon onClick={()=>setOpenPopup(false)} style={{color:'white',fontSize:'30px',margin:'20px 13px 0 0',cursor:'pointer'}}/>
                </div>
                <Divider variant="middle" />
           
                <DialogContent >{children}</DialogContent>
                
            </Dialog>
        </div>

    );
}
export default Popup;