import "./style.css";
import { NavigationDesktop } from "./navigationDesktop";
import { NavigationMobile } from "./navigationMobile";

export const Navigation = () => {
  return (
    <>
      <NavigationDesktop />
      <NavigationMobile />
    </>
  );
};
