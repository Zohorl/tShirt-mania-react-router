import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const gift = useContext(RingContext);
    return (
        <div>
            <h4>My Special</h4>
            <p>Gift : {gift}</p>
        </div>
    );
};

export default Special;