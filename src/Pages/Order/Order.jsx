import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import coverImg from "../../assets/shop/banner2.jpg";
import Cover from "../Shared/Cover/Cover";
import { useEffect, useState } from "react";
import 'react-tabs/style/react-tabs.css';
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const {category} = useParams();
    console.log('category', category);
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('https://bistro-boss-server-snowy-zeta.vercel.app/menu')
        .then(res => res.json())
        .then(data => {
            setMenu(data);
        })
    },[])
    console.log(menu);

    // const [menu] = useMenu();
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const drink = menu.filter(item => item.category === 'drinks');
    return (
        <div>
            <Cover img={coverImg} title={'Order Food'} details={'Would you like to try a dish?'}></Cover>
           <div className="max-w-screen-xl mx-auto">
           <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={drink}></OrderTab>
                </TabPanel>
            </Tabs>
           </div>
        </div>
    );
};

export default Order;