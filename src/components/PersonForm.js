import React, {useState} from 'react';
import Person from '../dto/Person';
import './PersonForm.css';
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import InputComponent from "./InputComponent";

const languageData = [
    {title: 'Java', active: true},
    {title: 'Java script', active: false},
    {title: 'C++', active: false},
];

const roles = ['Full time job', 'Student'];

const recommendData = [
    {title: 'Yes'},
    {title: 'No'},
    {title: 'Maybe'},
];

async function rest(person) {
    let url = `http://localhost:8080/employee`;
    // let url ="https://server-side-form.herokuapp.com/employee";
    try {
        let promise = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(person)
        });
        if (promise.ok) { // если HTTP-статус в диапазоне 200-299
            // получаем тело ответа (см. про этот метод ниже)
            alert("Сохранено в БД");
        } else {
            alert("Ошибка HTTP: " + promise.status);
        }
    } catch (error) {
        alert("Нет доступа к серверу");
    }
}

const PersonForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [currentRole, setCurrentRole] = useState(roles[0]);
    const [recommendOption, setRecommendOption] = useState(recommendData[0].title);
    const [comments, setComments] = useState();
    const [language, setLanguage] = useState(languageData);

    function handleLanguageChange(event) {
        setLanguage(language.map(item => item.title === event.target.value ? {
            title: item.title,
            active: !item.active
        } : item));
    }

    function handleSubmit(event) {
        event.preventDefault();
        let person = new Person(firstName,
            lastName,
            email,
            age,
            currentRole,
            recommendOption,
            language.reduce((result, item) => item.active ? result += item.title + "; " : result, ""),
            comments);
        rest(person);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} id="survey-form">
                <InputComponent value={firstName}
                                onChange={(event) => setFirstName(event.target.value)}
                                id="First Name"
                                type="text"/>
                <InputComponent value={lastName}
                                onChange={(event) => setLastName(event.target.value)}
                                id="Last Name"
                                type="text"/>
                <InputComponent value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                id="E-mail"
                                type="email"/>
                <InputComponent value={age}
                                onChange={(event) => setAge(event.target.value)}
                                id="Age(optional)"
                                min="10"
                                max="99"
                                type="number"/>
                <label id="select-label"
                       htmlFor="dropdown">Which option best describes your current role?</label>
                <select className="browser-default"
                        value={currentRole}
                        onChange={(event) => setCurrentRole(event.target.value)}>
                    {roles.map((item, ix) => <option key={ix} value={item}>{item}</option>)}
                </select>

                <label>
                    Would you recommend our site to your friend?
                </label>
                {recommendData.map((item, ix) => <Radio key={ix}
                                                        checked={item.title === recommendOption}
                                                        title={item.title}
                                                        onChange={(event) => {
                                                            setRecommendOption(event.target.value)
                                                        }}/>)}
                <label>
                    What language do you like to learn?
                </label>
                {language.map((item, ix) => <Checkbox key={ix} checked={item.active}
                                                      value={item.title}
                                                      onClick={handleLanguageChange}/>)}
                < label htmlFor="comments">
                    Any comments or suggestions?
                </label>
                <textarea id="comments"
                          name="comments"
                          className="form-control"
                          value={comments}
                          onChange={(event) => setComments(event.target.value)}>
                    </textarea>
                <div style={{marginTop: "20px"}}>
                    <button id="submit"
                            type="submit"
                            className="btn">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PersonForm;
