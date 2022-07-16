import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";
import { useEffect } from "react";
import { useRef } from "react";

// Notice that all classnames are implemented based on the BEM framework - Block Element Modifier

const Menu = () => (
  <>
    <p>
      {" "}
      <a href="/">Home</a>{" "}
    </p>
    <p>
      {" "}
      <a href="#wgpt3">What is GPT3?</a>{" "}
    </p>
    <p>
      {" "}
      <a href="#possibility">Open AI</a>{" "}
    </p>
    <p>
      {" "}
      <a href="#features">Case Studies</a>{" "}
    </p>
    <p>
      {" "}
      <a href="#blog">Library</a>{" "}
    </p>
  </>
);





const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
   //navbar scroll when active state
 const [navbar, setNavbar] = useState(false)

 //navbar scroll changeBackground function
 const changeBackground = () => {
  // console.log(window.scrollY)
  if (window.scrollY >= 66) {
    setNavbar(true)
  } else {
    setNavbar(false)
  }
}

// const navbarHeight = useRef()
// const navbarOffsetHeight = useRef(navbarHeight.current.offsetHeight)

useEffect(()=>{
  // console.log(navbarHeight)
  // let navbarOffsetHeight = navbarHeight.current.offsetHeight
  // document.documentElement.style.setProperty("--scroll-padding", navbarOffsetHeight + 5 + "px")
  // console.log(navbarHeight.current.offsetHeight)
  // console.log(navbarOffsetHeight)
  window.addEventListener("scroll", changeBackground)
},[])



  return (
    <nav className={navbar ? "gpt3__navbar  active" : "gpt3__navbar"} >
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <a href="/"><img src={logo} alt="logo" /></a>
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
