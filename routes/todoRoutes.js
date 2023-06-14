import { getTodos, getTodo, createTodo, updateTodo, deleteTodo } from '../controllers/todoController.js';



const todoRoutes = (app) => {
    app.route('/todos')
        .get(getTodos)
        .post(createTodo);

    app.route('/todo/:id')
        .put(updateTodo)
        .get(getTodo)
        .delete(deleteTodo);
}


export default todoRoutes;