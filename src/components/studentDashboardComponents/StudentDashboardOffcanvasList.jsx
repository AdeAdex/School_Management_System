import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Backdrop from '@mui/material/Backdrop';


const StudentDashboardOffcanvasList = ({icons, item, params}) => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      setOpen(false);
      navigate(params)
      }, 2000);
  }
  return (
    <>
    <div className="grid gap-y-3" onClick={()=> handleClick()} style={{cursor: "pointer"}}>
        <div className="flex gap-5">
          <i className={icons} style={{marginTop: 'auto', marginBottom: 'auto'}}></i>
          <div className="capitalize">{item}</div>
        </div>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
      {isLoading && <div class="loader">Loadings..........................</div>}
      </Backdrop>
      </div>
    </>
  )
}

export default StudentDashboardOffcanvasList