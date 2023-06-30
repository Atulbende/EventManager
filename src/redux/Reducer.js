export const Reducer=(state=[],action)=>{
    switch(action.type){
    case "SaveEvent":
        return [...state,action.payload];
    }
    console.log(state);
}
