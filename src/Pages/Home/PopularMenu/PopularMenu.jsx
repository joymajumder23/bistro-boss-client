import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popularItems = menu.filter(item => item.category === 'popular');
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('./menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular');
    //             setMenu(popularItems);
    //         })
    // }, []);
    // console.log(popularItems);
    return (
        <div className="max-w-screen-xl mx-auto mt-24">
            <section>
                <SectionTitle
                    subHeading={'Check it out'}
                    heading={'From Our Menu'}
                ></SectionTitle>
            </section>
            <section>
                <div className="grid md:grid-cols-2 gap-4 py-12">
                    {
                        popularItems.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                    }
                </div>
            </section>
        </div>
    );
};

export default PopularMenu;