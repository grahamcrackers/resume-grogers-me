import React, { SFC } from 'react';
import { IPosition } from '../../../data/models/IPosition';
import { Position } from '../Position';
import './index.scss';

export const Experience: SFC<{ positions: IPosition[] }> = ({ positions }) => {
    return (
        <section className="experience">
            <h3>Experience</h3>
            {positions.map(position => {
                return (
                    <Position
                        position={position.position}
                        details={position.details}
                        accomplishments={position.accomplishments}
                    />
                );
            })}
        </section>
    );
};
