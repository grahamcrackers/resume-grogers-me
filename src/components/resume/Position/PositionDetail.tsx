import React, { SFC } from 'react';
import { IPositionDetail } from '../../../data/models/IPositionDetail';

export const PositionDetail: SFC<IPositionDetail> = ({
    organization,
    location,
    started,
    ended
}) => {
    return (
        <div className="detail">
            <em className="org-and-location">
                <span className="org">{organization}</span>
                <span className="seperator">-</span>
                <span className="location">{location}</span>
            </em>
            {/* Assume if there's not ended date, then it's the present company  */}
            <span className="start-end-date">{`${started} - ${
                ended ? ended : 'Present'
            }`}</span>
        </div>
    );
};
