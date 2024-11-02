import { useContext, useMemo } from 'react';
import { ShoppingContext } from '@/context/ShoppingCartContext.jsx';

const useTotalProductCount = () => {
    const { cart } = useContext(ShoppingContext);

    return useMemo(() => Object.values(cart).reduce((total, quantity) => total + quantity, 0), [cart]);
};

export default useTotalProductCount;
