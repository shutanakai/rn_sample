import React from 'react';
import TodoList from '../components/TodoList';

const DoneListScreen = (props) => {
    const { name } = props.route;
    return <TodoList completedFlag={true} name={name} />;
};

export default DoneListScreen;
