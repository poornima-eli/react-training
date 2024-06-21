import React from 'react';

// Sample data array
const users = [
    { id: 1, name: 'Alice', age: 25, hobbies: ['Reading', 'Hiking'] },
    { id: 2, name: 'Bob', age: 30, hobbies: ['Cooking', 'Gaming'] },
    { id: 3, name: 'Charlie', age: 35, hobbies: ['Running', 'Swimming'] },
    { id: 4, name: 'Dave', age: 40, hobbies: ['Cycling', 'Photography'] }
];

const MapExample = () => {
    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <h2>{user.name}</h2>
                        <p>Age: {user.age}</p>
                        <p>Hobbies:</p>
                        <ul>
                            {user.hobbies.map((hobby, index) => (
                                <li key={index}>{hobby}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MapExample;
