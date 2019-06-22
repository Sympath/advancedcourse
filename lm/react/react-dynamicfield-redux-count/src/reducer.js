export default (state = 0,action)=>{
    console.log(action);
    switch (action.type) {
        case 'Increment':
            state+=1;
            break;
        case 'Decrement':
            state -= 1;
            break;
        default:
            break;
    }
    return state;
}