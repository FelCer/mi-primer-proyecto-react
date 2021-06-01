import {
    useState
} from 'react'
import initialState from '../initialState';

const useIntialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    };

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter((items) => items.cartId !== payload),
        });
    };

    const addToBuyer = (payload) => {
        setState({
            ...state,
            buyer: payload
        });
    };

    const addNewOrder = (payload) => {
        setState({
            ...state,
            orders: [...state.orders, payload]
        })
    }

    return {
        addToCart,
        removeFromCart,
        addToBuyer,
        addNewOrder,
        state
    }
};

export default useIntialState;