import React from "react";
import './header.scss';

interface IName {
    first: string;
    last: string;
}

interface IHeader {
    name: IName;
    title: string;
}

export const Header: React.SFC<IHeader> = ({name, title}) => {
  return (
    <header className="resume-header">
      <div className="name">
        <span className="first-name">{name.first}</span>{' '}
        <span className="last-name">{name.last}</span>
      </div>
      <div className="title">
        <span>{title}</span>
      </div>
    </header>
  );
};
