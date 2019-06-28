const {combineReducers} = require('redux'),
filmReducer = require('./filmReducer'),
filmFilter = require('./filmFilter');


module.exports = combineReducers({
    films: filmReducer,
    filter: filmFilter
})

// export default (state,action)=>{

//     return state;
// }