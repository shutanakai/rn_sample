import React from 'react';
import Editor from '../components/Editor';

const AddTodoScreen = (props) => {
    return <Editor name={props.route.name} />;
};

export default AddTodoScreen;
