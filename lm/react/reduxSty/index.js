const {createStore,applyMiddleware} = require('redux');
const reducer = require('./reducer/index');
const thunk = require('redux-thunk').default;
const store = createStore(reducer, applyMiddleware(thunk));


console.log(store.getState());

store.subscribe(()=>{
    console.log(store.getState());
    
})
// store.dispatch(, payload)
store.dispatch({
    type: 'ADD_FILM'    
})