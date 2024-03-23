import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import NavigationContent from "./NavigationContent";
const NavigationMain = ({ title, subMenu }) => {
  return (
    <>
      <NavigationMenu.Trigger className="text-white hover:text-p-orange focus:shadow-white group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
        {title}
        <CaretDownIcon
          className="text-white relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
          aria-hidden
        />
      </NavigationMenu.Trigger>
      <NavigationContent subMenu={subMenu} />
    </>
  );
};

export default NavigationMain;
