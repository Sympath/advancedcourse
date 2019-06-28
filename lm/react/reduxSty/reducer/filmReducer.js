module.exports = function(state = [], action){

    switch (action.type) {
        case 'ADD_FILM':
            state.push({
                id: action.id,
                name: action.name
            })
            break;
    
        default:
            break;
    }
    return state;
}