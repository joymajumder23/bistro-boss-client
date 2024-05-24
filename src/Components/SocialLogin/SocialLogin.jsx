import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleLogin} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogle = () => {
        googleLogin()
        .then(result => {
            console.log(result.user);
            const userInfo = {
                name: result.user.displayName,
                email: result.user.email
            };
            axiosPublic.post('/users', userInfo)
            .then(res => {
                if(res.data.insertedId) {
                    navigate('/');
                }
            })
        })
    }
    return (
        <div className="flex justify-center gap-6">
            <button onClick={handleGoogle} className="btn text-3xl rounded-full"><FcGoogle></FcGoogle></button>
            <button className="btn text-3xl rounded-full"><FaGithub></FaGithub></button>
        </div>
    );
};

export default SocialLogin;