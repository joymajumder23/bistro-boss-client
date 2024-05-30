import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`);
            return res.data;
        }
    })
    console.log(user?.email);
    console.log(payments);
    return (
        <div>
            <h1>Payment History</h1>
            <h2>Total Payments: {payments.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Email</th>
                                <th>Transaction Id</th>
                                <th>Total Price</th>
                                <th>Payment Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map((item, idx) => <tr key={item._id}>
                                    <th>{idx + 1}</th>
                                    <td>{item.email}</td>
                                    <td>{item.transactionId}</td>
                                    <td>{item.price}</td>
                                    <td>{item.date}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;