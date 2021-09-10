import React, { createContext, useState } from 'react';

export const ListContext = createContext();
export const StatusContext = createContext();

const ContextContainer = ({ children }) => {
    const initialList = [
        { title: '勉強', isCompleted: true },
        { title: '昼寝', isCompleted: false },
        { title: '洗濯', isCompleted: false },
    ];

    const initialStatus = {
        status: false,
        statement: '',
    };

    const [list, setList] = useState(initialList);
    const [status, setStatus] = useState(initialStatus);

    return (
        <ListContext.Provider value={[list, setList]}>
            <StatusContext.Provider value={{ status, setStatus }}>
                {children}
            </StatusContext.Provider>
        </ListContext.Provider>
    );
};

export default ContextContainer;
