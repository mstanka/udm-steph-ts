import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const logTodo = (id: number, title: string, completed: boolean): void => {
  console.log(`
    The TODO with ID: ${id}
    has a title: ${title}
    is completed: ${completed}
`);
};

//////// async/await with axios
(async (): Promise<void> => {
  const response = await axios.get(url);
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
})();

/////// using fetch then
// fetch(url)
//   .then((response) => {
//     response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     const todo = data as Todo;

//     const id = todo.id;
//     const title = todo.title;
//     const completed = todo.completed;

//     logTodo(id, title, completed);
//   });
