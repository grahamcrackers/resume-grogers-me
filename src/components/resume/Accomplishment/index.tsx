import React, { SFC } from 'react';

export const Accomplishment: SFC<{ accomplishments: string[] }> = ({
    accomplishments
}) => {
    return (
        <ul>
            {accomplishments.map(accomplishment => {
                return <li>{accomplishment}</li>;
            })}
        </ul>
    );
};
