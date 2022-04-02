import React, { useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';

export const RingContext = React.createContext('ring');
const Grandpa = () => {
    const ornament = 'Diamond Ring';
    const [house, setHouse] = useState(1);
    const handleAddToHouse = () => {
        const newHouse = house + 1;
        setHouse(newHouse);
    }
    return (
        <RingContext.Provider value={ornament}>
            <div className='grandpa'>
                <h4>Grandpa</h4>
                <p>House :{house} <button onClick={handleAddToHouse}>Add to House</button></p>
                <section style={{ display: 'flex' }}>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;