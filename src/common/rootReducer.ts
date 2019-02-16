interface IRootState  {
    count: number
}
const initState:IRootState = {
    count: 0
}
export default (state = initState, action: any) => {
    switch(action.type) {
        case 'add':
            return {
                ...state,
                count: state.count + 1
            }
        default:
            return state
    }
}