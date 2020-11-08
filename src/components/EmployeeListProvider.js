import React, {useEffect, useState} from "react";
import PersonList from "./PersonList";

const EmployeeListProvider = () => {
    const [employeeList, setEmployeeList] = useState([]);
    const [deleted, setDeleted] = useState(false);
    useEffect(() => {
        rest();
    }, [deleted]);

    async function handleDelete(event) {
        await restDelete(event.target.value);
        setDeleted(!deleted);
    }

    async function restDelete(id) {
        let url = `${process.env.REACT_APP_SERVER_URL}/employee/${id}`;
        try {
            let promise = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            });
            if (promise.ok) { // если HTTP-статус в диапазоне 200-299
                // получаем тело ответа (см. про этот метод ниже)
                alert("Удалено из БД");
            } else {
                switch (promise.status) {
                    case 404:
                        alert(`Нет такого пользователя в БД: ${id}`);
                        break;
                    default:
                        alert("Ошибка HTTP: " + promise.status);
                }
            }
        } catch (error) {
            alert("Нет доступа к серверу");
        }
    }
    async function rest() {
        let url = `${process.env.REACT_APP_SERVER_URL}/employeeList`;
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
                setEmployeeList(json);
            } else {
                alert("Ошибка HTTP: " + promise.status);
            }
        } catch (error) {
            alert("Нет доступа к серверу");
        }
    }

    return <PersonList employeeList={employeeList} handleDelete={handleDelete}/>
};
export default EmployeeListProvider;