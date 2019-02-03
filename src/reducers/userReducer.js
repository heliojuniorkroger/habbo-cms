export default (state = JSON.parse(window.sessionStorage.getItem('user')), action) => {
    switch (action.type) {
        case 'SET_USER':
            return action.payload
        default:
            return state
    }
}