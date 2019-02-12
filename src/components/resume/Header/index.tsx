import React from 'react';
import './index.scss';

interface IName {
    first: string;
    last: string;
}

interface IHeader {
    name: IName;
    title: string;
}

export const Header: React.SFC<IHeader> = ({ name, title }) => {
    return (
        <header>
            <h1 className="name">
                <span className="first-name">{name.first}</span>{' '}
                <span className="last-name">{name.last}</span>
            </h1>
            <h2 className="title">
                <span>{title}</span>
            </h2>
        </header>
    );
};
