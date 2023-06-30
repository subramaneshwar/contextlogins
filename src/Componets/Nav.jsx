import React, { useContext } from 'react'
import { Auth } from './Contex'

function Nav() {
   const {setislogin,users} =useContext(Auth)
  return (
    <div style={{background:"black",height:'15vh',padding:'20px'}}>
        <div className="title" style={{textAlign:'center',color:"#CA31D4"}} >
            <h1>React Context</h1>
        </div>
        <div className='menu' style={{display:"flex",alignItems:'center',justifyContent:"space-evenly",gap:'20px',fontSize:"1.5rem",textDecoration:'none',padding:'10px 0' }} >
            <a href="" style={{textDecoration:"none" ,color:'#F37F00' }}>Home</a>
            <a href="" style={{textDecoration:"none" ,color:'#F37F00' }}  >Profile</a>
            <a href="" style={{textDecoration:"none" ,color:'#F37F00' }} >Products</a>
            <a href="" style={{textDecoration:"none" ,color:'#F37F00' }} >Support</a>
            <div style={{display:"flex",alignItems:'center',gap:'10px'}}>
            <p style={{textDecoration:"none" ,color:'#F37F00' }}>
               user: <span style={{color:'green',fontWeight:"bolder"}}>
                {users}
                </span>
            </p>
            <button style={{padding:'.4rem .8rem',background:'#F37F00',color:'white',fontWeight:'bolder'}} 
            onClick={()=>{
                setislogin(false)
            }}
            
            >
                Logout
            </button>
            </div>
            
        </div>
    </div>
  )
}

export default Nav