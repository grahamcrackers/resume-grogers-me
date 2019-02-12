import React, { Fragment, SFC } from 'react';
import { IPosition } from '../../../data/models/IPosition';
import { IPositionDetail } from '../../../data/models/IPositionDetail';
import { Accomplishment } from '../Accomplishment';
import { PositionDetail } from './PositionDetail';
import './index.scss';

export const Position: SFC<IPosition> = ({
    position,
    details,
    accomplishments
}) => {
    return (
        <div className="position">
            <span>{position}</span>

            {details.map((detail: IPositionDetail) => {
                return (
                    <PositionDetail
                        organization={detail.organization}
                        location={detail.location}
                        started={detail.started}
                        ended={detail.ended}
                    />
                );
            })}
            <Accomplishment accomplishments={accomplishments} />
        </div>
    );
};
