import React,{useState,useEffect} from 'react';
import "./Nav.css";

const Nav = () => {
    const [show,handleShow] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }
            else{
                handleShow(false);
            }
        });
        return ()=>{
            window.removeEventListener("scroll");
        };
    },[]);
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            className="nav__logo" alt="Netflix logo" />
         
       
            <img src="https://img.icons8.com/fluent/48/000000/user-male-circle.png" 
             className="nav__avatar" alt="user avatar"/>
        </div>
    );
};

export default Nav;