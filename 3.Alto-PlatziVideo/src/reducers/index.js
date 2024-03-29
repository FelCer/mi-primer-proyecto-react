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
            break;
        case actions.deleteFavorite:
            return {
                ...state,
                myList: state.myList.filter(items => items.id !== action.payload)
            }
            break;
        case actions.loginRequest:
            return {
                ...state,
                user: action.payload
            }
            break;
        case actions.logoutRequest:
            return {
                ...state,
                user: action.payload
            }
            break;
        case actions.registerRequest:
            return {
                ...state,
                user: action.payload
            }
            break;
        case actions.getVideoSource:
            return {
                ...state,
                playing: state.trends.find(item => item.id === Number(action.payload)) ||
                    state.originals.find(item => item.id === Number(action.payload)) || []
            }
            break;
        case actions.searchVideoSource:
            return {
                ...state,
                searchVideos: state.originals.filter(item => item.id === Number(action.payload))
            }
            break;
        case actions.loading:
            return {
                ...state,
                loading: true
            }
            break;
        case actions.error:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
            break;
        default:
            return state;
            break;
    }
}
export default reducer