import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const CheckOut = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const [clientSecret, setClientSecret] = useState('');
    const { user } = useAuth();
    const [transactionId, setTransactionId] = useState('');
    console.log(user?.email);

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
    }, [axiosSecure, totalPrice]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        
        if (error) {
            console.log(error);
            setError(error.message);
        }
        else {
            console.log(paymentMethod);
            setError('');
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || ' anonymous',
                    name: user?.displayName || ' anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('Error');
        }
        else {
            console.log(paymentIntent);
            if (paymentIntent?.status === 'succeeded') {
                setTransactionId(paymentIntent.id);
                const payment = {
                    transactionId: paymentIntent.id,
                    email: user?.email,
                    price: totalPrice,
                    date: new Date(),
                    cartId: cart.map(item => item._id),
                    menuItemCart: cart.map(item => item.menuId),
                    status: 'pending'
                }

                const res = await axiosSecure.post('/payments', payment)
                console.log(res.data);
                refetch();
                if (res.data?.result?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Payment Success",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className="btn bg-orange-500 mt-6" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                error && <p className="text-red-500">{error}</p>
            }
            {
                transactionId && <p className="text-green-500">You're Transaction Id:{transactionId}</p>
            }
        </div>
    );
};

export default CheckOut;