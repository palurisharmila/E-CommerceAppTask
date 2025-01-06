const redux=require('redux')
const reduxLogger = require('redux-logger')


const createStore= redux.createStore
const combineReducers=redux.combineReducers
const applyMiddleware=redux.applyMiddleware
const logger=reduxLogger.createLogger();

const BUY_CAKE='BUY_CAKE';
const BUY_ICECREAM='BUY_ICECREAM'
function buycake(){
    return{
        type: BUY_CAKE,
        info:'First redux action'
    }
}
function buyicecream(){
    return{
         type: BUY_ICECREAM,
        info:'First redux action'
    }
}

// const initialState={
//     numOfCakes :10,
//     numOfIceCreams:20
// }
const initialCakeState={
    numOfCakes :10
    
}
const initialIceCreamState={
   
    numOfIceCreams:20
}

// const reducer =(state=initialState,action)=>{
//     switch(action.type){
//         case BUY_CAKE : return {
//             ...state,
//             numOfCakes:state.numOfCakes-1
//         }
//         case BUY_ICECREAM : return {
//             ...state,
//             numOfIceCreams:state.numOfIceCreams-1
//         }
//         default: return state
//     }
// }
const Cakereducer =(state=initialCakeState,action)=>{
    switch(action.type){
        case BUY_CAKE : return {
            ...state,
            numOfCakes:state.numOfCakes-1
        }
        
        default: return state
    }
}

const IceCreamreducer =(state=initialIceCreamState,action)=>{
    switch(action.type){
        case BUY_ICECREAM : return {
            ...state,
            numOfIceCreams:state.numOfIceCreams-1
        }
        default: return state
    }
}

const rootReducers=combineReducers({
    cake:Cakereducer,
    icecream:IceCreamreducer
})


const store=createStore(rootReducers,applyMiddleware(logger))
console.log("Initial State",store.getState())
const unsubscribe=store.subscribe(()=>console.log('Updated State',store.getState()))
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buyicecream())
store.dispatch(buyicecream())
store.dispatch(buyicecream())
unsubscribe()
 