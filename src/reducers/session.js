const INITIAL__STATE = {
    authUser : null
}

const applySetAuthUser = (state, action ) => ({
    ...state, actionAuthUser: action.authUser
});

function sessionReducer (state = INITIAL__STATE, action){
    switch(action.type){
        case 'AUTH_USER_SET' : {
            return applySetAuthUser (state, action);
        }
        default: return state;
    }
}
export default sessionReducer;