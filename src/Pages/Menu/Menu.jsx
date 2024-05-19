import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import img from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../Shared/MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Home | Menu</title>
            </Helmet>
            <div>
                <Cover img={img} title={'Our Menu'} details={'Would you like to try a dish?'}></Cover>
                <SectionTitle subHeading={'Do not miss'} heading={'Todays Offer'}></SectionTitle>
                <MenuCategory items={offered}></MenuCategory>
                <MenuCategory items={dessert} title={'Dessert'} img={dessertImg}></MenuCategory>
                <MenuCategory items={pizza} title={'Pizza'} img={pizzaImg}></MenuCategory>
                <MenuCategory items={salad} title={'Salad'} img={saladImg}></MenuCategory>
                <MenuCategory items={soup} title={'Soup'} img={soupImg}></MenuCategory>
            </div>
            
        </div>
    );
};

export default Menu;