import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/about">about</Link>
    <Link to="/contact">contact</Link>
    <ThemeChanger/>
  </nav>
  
)
