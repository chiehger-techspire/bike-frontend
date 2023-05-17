import React, { useState, useEffect } from 'react';

const BikeRental = () => {
    const [bikes, setBikes] = useState([]);
    const [newBike, setNewBike] = useState({});
    useEffect(() => {
        fetchBikes();
    }, []);
    const fetchBikes = async () => {
        const response = await fetch('/api/bikes'); // Replace with the appropriate API URL
        const data = await response.json();
        setBikes(data);
    };
    const createBike = async () => {
        await fetch('/api/bikes', {
            method: 'POST',
            headers: {
                'Content - Type': 'application / json',
            },
            body: JSON.stringify(newBike),
        });
        setNewBike({});
        fetchBikes();
    };
    return (
        <div>
            <h2>Bike Rental</h2>
            <div>
                <h3>Bikes</h3>
                {bikes.map((bike) => (
                    <div key={bike.id}>
                        <p>{bike.name}</p>
                        <p>{bike.type}</p>
                    </div>
                ))}
            </div>
            <div>
                <h3>Add Bike</h3>
                <input
                    type='text'
                    placeholder='Name'
                    value={newBike.name || ''}
                    onChange={(e) => setNewBike({ ...newBike, name: e.target.value })}
                />
                <input
                    type='text'
                    placeholder='Type'
                    value={newBike.type || ''}
                    onChange={(e) => setNewBike({ ...newBike, type: e.target.value })}
                />
                <button onClick={createBike}>Add Bike</button>
            </div>
        </div>
    );
};
export default BikeRental;