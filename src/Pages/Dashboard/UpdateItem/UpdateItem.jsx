import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateItem = () => {
    const {_id, name, category, price, recipe} = useLoaderData();
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log(res.data);
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                recipe: data.recipe,
                image: res.data.data.display_url,
                category: data.category,
                price: parseFloat(data.price)
            };
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} updated successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    };
    return (
        <div className="max-w-screen-xl mx-auto">
            <h1>Add Items</h1>
            <div>
                <SectionTitle heading={'Update An Item'} subHeading={"What's New"}></SectionTitle>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input defaultValue={name} {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered w-full" />
                    </label>

                    <div className="flex gap-6  my-6">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select defaultValue={category} {...register("category", { required: true })} className="select w-full">
                                <option disabled value="default">Select Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                            </select>
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input defaultValue={price} {...register("price", { required: true })} type="text" placeholder="price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <label className="form-control my-6">
                        <div className="label">
                            <span className="label-text">Recipe Details*</span>
                        </div>
                        <textarea defaultValue={recipe} {...register("details", { required: true })} className="textarea textarea-bordered h-24" placeholder="Details"></textarea>
                    </label>
                    <div className="my-6">
                        <input {...register("image")} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn"><FaUtensils></FaUtensils>Add Items</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;