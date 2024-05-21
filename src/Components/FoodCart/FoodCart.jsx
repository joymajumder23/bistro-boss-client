import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const FoodCart = ({ item }) => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const {_id, name, image, price, recipe} = item;

    const handleFoodCart = (food) => {
        console.log(food);

        if (user && user?.email) {
            const cartItem = {
                menuId: _id,
                email: user?.email,
                name,
                image,
                price

            };

            axios.post('http://localhost:5000/carts', cartItem)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Added to Cart",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
        }
        else {
            Swal.fire({
                title: "Logged In",
                text: "Please login to add cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login Now"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}});
                }
            });
        }
    }
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className="absolute right-0 mr-4 mt-4 p-2 bg-slate-900 text-white">${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleFoodCart(item)} className="btn btn-outline border-0 border-b-4 uppercase border-yellow-500 text-yellow-500">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;