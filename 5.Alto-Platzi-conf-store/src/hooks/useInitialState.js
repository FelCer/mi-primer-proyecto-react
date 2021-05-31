import {
    useState
} from 'react'
import initialState from '../initialState';

const useIntialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = paylad => {
        setState({
            ...state,
            cart: [...state.cart, paylad]
        })
    };

    const removeToCart = paylad => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== paylad.id)
        })
    };

    return {
        addToCart,
        removeToCart,
        state
    }
};

export default useIntialState;