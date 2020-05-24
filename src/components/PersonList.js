import React, {useEffect, useState} from 'react';
import './PersonForm.css';

async function restDelete(person) {
    let url = `http://localhost:8080/employee`;
    // let url = "https://server-side-form.herokuapp.com/employee";
    try {
        let promise = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(person)
        });
        if (promise.ok) { // если HTTP-статус в диапазоне 200-299
            // получаем тело ответа (см. про этот метод ниже)
            alert("Удалено из БД");
        } else {
            switch (promise.status) {
                case 404:
                    alert(`Нет такого пользователя в БД: ${person.firstName} ${person.lastName}`);
                    break;
                default:
                    alert("Ошибка HTTP: " + promise.status);
            }
        }
    } catch (error) {
        alert("Нет доступа к серверу");
    }
}

const PersonList = () => {
    const [listOfPersons, setListOfPersons] = useState([]);
    const [deleted, setDeleted] = useState(false);
    useEffect(() => {
        rest();
    }, [deleted]);

    async function rest() {
        // let url = `http://localhost:8080/employeeList`;
        let url = "https://server-side-form.herokuapp.com/employeeList";
        try {
            let promise = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            });
            if (promise.ok) { // если HTTP-статус в диапазоне 200-299
                // получаем тело ответа (см. про этот метод ниже)
                let json = await promise.json();
                setListOfPersons(json);
            } else {
                alert("Ошибка HTTP: " + promise.status);
            }
        } catch (error) {
            alert("Нет доступа к серверу");
        }
    }

    function handleDelete(event) {
        setDeleted(!deleted);
        restDelete(listOfPersons[event.target.value]);
        rest();
    }

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
                    {listOfPersons.map((person, id) =>
                        (<tr key={id}>
                            <td>{person.firstName}</td>
                            <td>{person.lastName}</td>
                            <td>{person.email}</td>
                            <td>{person.age}</td>
                            <td>{person.currentUserRole}</td>
                            <td>{person.recommend}</td>
                            <td>{person.language}</td>
                            <td>{person.comments}</td>
                            <td>
                                <button className="btn" value={id} onClick={handleDelete}>delete</button>
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
