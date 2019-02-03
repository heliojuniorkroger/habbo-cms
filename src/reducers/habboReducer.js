export default (state = {}, action) => {
    switch (action.type) {
        case 'TOGGLE_CLIENT':
            return { ...state, clientVisible: !state.clientVisible }
        case 'OPEN_CLIENT':
            return { ...state, clientOpen: true }
        default:
            return state
    }
}