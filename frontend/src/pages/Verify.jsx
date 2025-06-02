import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { backendUrl } from '../../../admin/src/App';
import { toast } from 'react-toastify';

const Verify = () => {
    const { token, setCartItem } = useContext(ShopContext);
    const [searchParams,setSearchParams] = useSearchParams(); // ✅ Correct hook for query params
    const navigate = useNavigate(); // ✅ Use navigate from react-router

    const success = searchParams.get('success');
    const orderId = searchParams.get('orderId');

    const verifyPayment = async () => {
        try {
            if (!token) return;

            const response = await axios.post(
                backendUrl + '/api/order/verifyStripe',
                { success, orderId },
                { headers: { token } }
            );

            if (response.data.success) {
                setCartItem({});
                navigate('/orders');
            } else {
                navigate('/cart');
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    useEffect(() => {
        verifyPayment();
    }, [token]);

    return <div></div>;
};

export default Verify;
