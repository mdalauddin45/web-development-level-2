export default function Task({ todo, done }) {
  if (done === true) {
    return <li>task: {todo}</li>;
  }
  else{
    return <li>Todo: {todo}</li>;
  }
}
