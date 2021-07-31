
exports.userReducer = (state = null, action) => {
    switch (action.type) {
        case 'LOGGED_IN_USER':
            return action.payload;
        case 'LOGOUT':
            localStorage.clear();
            return action.payload;
        default:
            return state;
    }
}