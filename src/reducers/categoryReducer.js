import {FETCH_CATEGORIES, ADD_CATEGORY} from "../actions/types";

const  initialState= {

    categories: [],
    category:{}

};

export default function (state = initialState, action) {

    switch (action.type){

        case FETCH_CATEGORIES:
            return{

                ...state,
                categories:action.payload

            };

        case ADD_CATEGORY:
            return{

                ...state,
                category:action.payload

            };

        default:
            return state;
    }

}