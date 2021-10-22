import
    {
        MENTOR_LIST_REQUEST,
        MENTOR_LIST_SUCCESS,
        MENTOR_LIST_FAIL,
        MENTOR_LIST_SEARCH
} from "../constants/mentorConstants";

const initialState = {
    mentor: []
}

export const mentor = (state=initialState, action) =>
{
    switch ( action.type )
    {
        case MENTOR_LIST_REQUEST:
            return {...state,loading: true, mentor: []}
        case MENTOR_LIST_SUCCESS:
            return {loading: false, mentor: action.payload}
        case MENTOR_LIST_FAIL:
            return { loading: false, error: action.payload }
        case MENTOR_LIST_SEARCH:
            return {
                ...state,
                mentor: action.payload,
               
            }

        default:
            return state
    }
}

