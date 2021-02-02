const auth = (state, action) => {
    switch (action.type) {
        case 'CurrentUser':
            return state.CurrentUserData = action.val
    }
}

export default auth;