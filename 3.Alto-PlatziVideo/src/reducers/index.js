import {
    actions
} from '../actions'

const reducer = (state, action) => {
    switch (action.type) {
        case actions.setFavorite:
            const exist = state.myList.find(item => item.id === action.payload.id);

            if (exist)
                return {
                    ...state
                };

            return {
                ...state,
                myList: [...state.myList, action.payload]
            }
            case actions.deleteFavorite:
                return {
                    ...state,
                    myList: state.myList.filter(items => items.id !== action.payload)
                }
                default:
                    return state;
    }
}
export default reducer