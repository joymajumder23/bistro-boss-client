import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed">
            <SectionTitle
            subHeading={'Check it out'}
            heading={'From Our Menu'}
            ></SectionTitle>
            <div className="md:flex justify-center items-center px-72 py-64 gap-10">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="text-white">
                    <p>14 April 2024</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minus, excepturi provident natus sint qui, velit similique ipsam magnam voluptates assumenda eaque fugiat rerum eum veritatis ab animi quasi facilis! Corrupti aliquam omnis error porro accusamus asperiores alias et, adipisci aut sit quia quaerat perferendis, sequi ullam nulla, exercitationem temporibus quasi cum dolorum unde enim modi eaque eligendi molestiae?</p>
                    <button className="btn btn-outline border-0 border-b-4 border-white text-white">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;