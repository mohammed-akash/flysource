import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../Redux/CartSlice'; // Adjust the import to your slice location
import { toast } from 'react-toastify';
const useCart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state: any) => state.cart);
    const handleCart = (productId: string, operation: 'add' | 'remove', size: string, color: string) => {
        if (operation === 'add') {
            toast.success('Item added successfully')
            dispatch(add({ ID: productId, quantity: 1, size, color }));
        } else if (operation === 'remove') {
            dispatch(remove(productId));
        }
    };

    return {
        cart,
        handleCart,
    };
};

export default useCart;
