const logger=(state)=>(next)=>(action)=>{
    console.log(state.getState());
    console.log(action);
    return next(action);
}

export default logger;