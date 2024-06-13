import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import signUp from "../../assets/others/authentication.gif";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    const {
        register,
        handleSubmit,
        formState: { errors }, reset
    } = useForm();
    
    const onSubmit = (data) => {
        console.log(data)

        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log(result.user);

                        const userInfo = {
                            name: data.name,
                            email: data.email
                        };
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        title: "Sign Up Successfully",
                                        showClass: {
                                            popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                                        },
                                        hideClass: {
                                            popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                                        }
                                    });
                                }
                            })
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
            })
    };
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold mb-4">Sign Up now!</h1>
                        <img src={signUp} alt="" />
                    </div>
                    <div className="card shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100 rounded-none">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" name="name"  {...register("name")} required />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name="email" {...register("email")} required />
                                {errors.email && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photo url" className="input input-bordered" {...register("photoURL")} required />
                                {errors.photoURL && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name="password" {...register("password", { minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} required />
                                {errors.password?.type === 'minLength' && <span>Password must be 6 characters</span>}
                                {errors.password?.type === 'pattern' && <span>One Uppercase and One Lowercase and One Special Character</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div>
                                <input className="btn" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='p-6 text-center'>Already have an account? <Link className='font-semibold' to="/login">Go to login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;