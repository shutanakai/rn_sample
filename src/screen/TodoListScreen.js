import React from 'react';
import TodoList from '../components/TodoList';

const TodoListScreen = (props) => {
    const { name } = props.route;
    return <TodoList completedFlag={false} name={name} />;
};

export default TodoListScreen;
