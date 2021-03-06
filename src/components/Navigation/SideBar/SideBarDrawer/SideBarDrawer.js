import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Style from "./SideBarDrawer.module.css";

const SideBarDrawer = (props) => (
  <div className={Style.DrawerToggle} onClick={props.clicked}>
    <FontAwesomeIcon icon={faBars} size="3x" color="white" />
  </div>
);

export default SideBarDrawer;