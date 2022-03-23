import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import './Nav.css'


function Nav() {
  
const [i, setI] = useState(5)


useEffect(() => {
    
     setInterval(() => {
        
        setI((current) => {
            
            const res = current === 150 ? 5 : current + 1
           
            return res
        })
    }, 80)
    
    return () => clearInterval()
}, [])

  const navStyle={
    background: `linear-gradient(${i}deg, rgba(29,32,34,0.9248074229691877) 5%, rgba(50,63,76,1) 17%, rgba(63,84,105,0.8939950980392157) 30%, rgba(67,121,143,0.7791491596638656) 50%, rgba(53,72,87,1) 69%, rgba(42,76,97,0.6643032212885154) 86%, rgba(28,33,33,1) 98%)`
  }
    return(<div className="nav" style={navStyle}>
       <ul className ="nav_list">
         <Link className="nav_link" to={"/"}>
         ԳԼԽԱՎՈՐ
         </Link>
         <Link className="nav_link" to={"/"}>
         ԿԱՏԱԼՈԳ
         </Link>
         <Link className="nav_link" to={"/info"}>
         ՄԵՐ ՄԱՍԻՆ
         </Link>
         <Link className="nav_link" to={"/info"}>
         ՏԵՂԵԿԱՏՈՒ
         </Link>
        
         <Link className="nav_link" to={"/info"}>
         ԿԱՊ
         </Link>
       </ul>
       
        
    </div>)
}

export default Nav