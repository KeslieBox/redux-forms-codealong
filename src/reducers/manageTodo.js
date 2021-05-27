
// step 3, then step 7
// check to see if updates are needed othwerwise returns state
export default function manageTodo(state = {todos: []}, action) {
  // this receives object as 'action' returned from invoking dispatch
  // then check keys in object to see if there are changes and if so, updates state
  switch(action.type){
    case 'ADD_TODO': 
      return { todos: [...state.todos, action.payload.text]}
    
    default:
      return state;
  }

 
}
