import { Link } from "react-router-dom";
import Cover from "../Cover/Cover";
import MenuItems from "../MenuItems/MenuItems";

const MenuCategory = ({ items, img, title }) => {
    console.log(items);
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <div className="max-w-screen-xl mx-auto">
                <div className="grid md:grid-cols-2 gap-4 py-12">
                    {
                        items.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                    }
                </div>
                <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4 uppercase border-yellow-500 text-yellow-500">Order Now</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;