import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { FirstLevelMenuItem } from "../../interfaces/menu.interface";
import styles from "./Menu.module.css";
import CoursesIcon from "./icons/courses.svg"
import ServicesIcon from "./icons/services.svg"
import BooksIcon from "./icons/books.svg"
import ProductsIcon from "./icons/product.svg"
import { TopLevelCategory } from "../../interfaces/page.interface";
import cn from "classnames"

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Course",
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses
  },
  {
    route: "services",
    name: "Services",
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services
  },
  {
    route: "books",
    name: "Books",
    icon: <BooksIcon />,
    id: TopLevelCategory.Books
  },
  {
    route: "products",
    name: "Products",
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products
  },
]


export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map(menu => (
          <div key={menu.route}>
            <a href={`/${menu.route}`}>
              <div className={cn(styles.firstLevel, {
                [styles.firstLevelActive]: menu.id == firstCategory
              })}>
                {menu.icon}
                <span>{menu.name}</span>
              </div>
            </a>
          </div>
        ))}
      </>
    );
  };

  // const buildSecondLevel = () => {

  // };

  // const buildThirdLevel = () => {

  // };


  return (
    <div className={styles.menu}>
      {buildFirstLevel()}
    </div>
    // <ul>
    //   {menu.map(m => (
    //     <li key={m._id.secondCategory} >{m._id.secondCategory}</li>
    //   ))}
    // </ul>
  )
};
