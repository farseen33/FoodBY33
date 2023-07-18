import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
    <a href="/" > 
    <img className="logo" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJLhO3-zGMXx_z-x39ItXy8LLkEENdbRucgA&usqp=CAU" />
    </a>
)



const Header = () => {
   
    const [isLoggedIn, setIsLoggedIn] =useState(false);
    


return(
    <div className="header">
    <Title />
        
    <div className="nav-items">
    <ul>
    <Link to="/"> <li>home </li></Link>
    <li></li>
    <Link to="/about"><li>About</li></Link>
    <li></li>
        <Link to="/contact"><li>contact</li></Link>
    <li>Cart</li>
    </ul>
    </div>{isLoggedIn  ?   (<button className="logout" onClick={()=>{
        setIsLoggedIn(false)
    }}
    >Logout</button>)  
    :
    ( <button className="login" onClick={()=>{
        setIsLoggedIn(true)
    }}>Login</button>)  }
  
    
    </div>
)
}

export default Header;
