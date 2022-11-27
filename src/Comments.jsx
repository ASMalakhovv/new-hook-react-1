import React, {useDeferredValue} from 'react';

export const Comments = ({entities = []}) => {
    const value = useDeferredValue(entities)

    return (
        <ul>
            {value.map(comment => (
                <li key={comment.id}>
                    <h3>{comment.name}</h3>
                    <p>{comment.body}</p>
                </li>
            ))}
        </ul>
    );
};