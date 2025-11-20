export default function CounterReducer (state:any, action:any) {
    switch (action.type) {
        case 'INCREMENT':
            return {count:state.count++}
        case 'DECREMENT':
            return {count:state.count--}
        case 'RESET':
            return {count:action.payload}
        default:
            return null;
    }
}