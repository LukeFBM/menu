import Title from "./Title";
import menu from "./data";
import { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";

/* con questa linea creiamo un array con le 3 categorie che gli item presentevano: 
brekfats, lunch, shake, alla quale aggiungiamo a categoria all che le racchiude tutte. 
*/
const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  /*Con il metodo filter, passanfo il parametro di category, andiamo a filtrare le categorie
  del menu in modo tale da mostrare solo i menuitems che hanno quella cateogira grazie a SetMenuItems*/
  const filterItems = (category) => {
    // qui settiamo che se la categoria è all, allora ritorniamo al menu originale con tutti gli items
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
