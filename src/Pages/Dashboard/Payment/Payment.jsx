import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY);
    return (
        <div className="max-w-screen-xl mx-auto">
            <div>
                <SectionTitle heading={"Payment"} subHeading={"Please pay first"}></SectionTitle>
            </div>
            <Elements stripe={stripePromise}>
                <CheckOut/>
            </Elements>
        </div>
    );
};

export default Payment;