import React from 'react';
import Editor from '../components/Editor';

const EditTodoScreen = (props) => {
    return <Editor name={props.route.name} item={props.route.params.item} />;
};

export default EditTodoScreen;
