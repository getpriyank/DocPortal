import classNames from "classnames";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";

const ListItem = ({ className, title, link }) => (
  <li>
    <NavigationMenu.Link asChild>
      <Link
        className={classNames(
          "focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors group",
          className
        )}
        to={link}
      >
        <div className="text-violet12 mb-[5px] font-medium leading-[1.2] group-hover:text-p-orange">
          {title}
        </div>
        <p className="text-mauve11 leading-[1.4]">{}</p>
      </Link>
    </NavigationMenu.Link>
  </li>
);
const NavigationContent = ({ subMenu }) => {
  return (
    <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
      <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3 ">
        {subMenu.map((item) => (
          <ListItem title={item?.name} link={item?.link} key={item?.id} />
        ))}
      </ul>
    </NavigationMenu.Content>
  );
};

export default NavigationContent;
