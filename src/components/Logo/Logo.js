import { NavLink } from "react-router-dom";
import Style from "./Logo.module.css";

const logo = () => (
    <div className={Style.Home}>
    <NavLink exact to='/'>Edward Ma</NavLink>
  </div>
)

export default logo;