import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import { navBarItems } from "../../constants";
import NavigationMain from "./NavigationMain";
import { Link } from "react-router-dom";

const NavigationMenuDemo = () => {
  return (
    <NavigationMenu.Root className="relative z-50 flex w-screen justify-center">
      <NavigationMenu.List className="center shadow-blackA4 m-0 flex list-none rounded-[6px] bg-black p-1 shadow-[0_2px_10px]">
        <>
          {navBarItems.map((item) => {
            return (
              <NavigationMenu.Item key={item?.id}>
                <Link to={item.link}>
                  <NavigationMain
                    title={item?.name}
                    harshi="1"
                    surya="2"
                    subMenu={item?.subMenu}
                  />
                </Link>
              </NavigationMenu.Item>
            );
          })}
        </>

        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};

export default NavigationMenuDemo;
