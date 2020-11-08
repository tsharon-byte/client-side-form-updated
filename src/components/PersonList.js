import React from 'react';

import './PersonForm.css';

const PersonList = ({employeeList, handleDelete}) => {

    return (
        <div>
            <h2>List of all persons</h2>
            <div>
                <table border="2" cellSpacing="5" className="highlight pd1">
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last name</th>
                        <th>E-mail</th>
                        <th>Age</th>
                        <th>Current role</th>
                        <th>Recommend</th>
                        <th>Language</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {employeeList.map(person =>
                        (<tr key={person.id}>
                            <td>{person.firstName}</td>
                            <td>{person.lastName}</td>
                            <td>{person.email}</td>
                            <td>{person.age}</td>
                            <td>{person.currentUserRole}</td>
                            <td>{person.recommend}</td>
                            <td>{person.language}</td>
                            <td>{person.comments}</td>
                            <td>
                                <button className="btn" value={person.id} onClick={handleDelete}>delete</button>
                            </td>
                        </tr>)
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PersonList;
