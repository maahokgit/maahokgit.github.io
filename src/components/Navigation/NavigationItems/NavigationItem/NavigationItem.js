import Style from "./NavigationItem.module.css";

const { NavLink } = require("react-router-dom");

const navigationItem = props => (
    <li className={Style.Items}>
        <NavLink exact to={props.link} activeClassName={Style.active}>{props.children}</NavLink>
    </li>
)

export default navigationItem;