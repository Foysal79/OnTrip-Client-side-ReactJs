import { TableCell, TableRow } from '@mui/material';
import React from 'react';

const TourGuidesCard = ({guide}) => {
    const {_id, name, email} = guide || {}
    return (
        <div>
            <i>
                {email}
            </i>
            <li>
                {}
            </li>
        </div>
    );
};

export default TourGuidesCard;