import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

import Style from "./SideBar.module.css";

const SideBar = (props) => {
  let attachedClasses = [Style.SideBar, Style.Close];

  if (props.open) {
    attachedClasses = [Style.SideBar, Style.Open];
  }
  return (
    <div className={attachedClasses.join(" ")} onClick={props.closed}>
      <div className={Style.Logo}>
        <Logo />
      </div>

      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default SideBar;
