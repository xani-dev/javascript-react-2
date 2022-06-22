const axios = require('axios').default;

const getPerson = async (userId) => {
    let result = await axios.get(`http://localhost:5150/person/${userId}`);
    return result.data;
}

const addPerson = async (person) => {
    let result = await axios.post(`http://localhost:5150/person/`, person);
    return result.data;
}

const deletePerson = async (userId) => {
    let result = await axios.delete(`http://localhost:5150/person/${userId}`);
    return result.data;
}

const main = async () => {
    // GET...
    let userId = 2
    let person = await getPerson(userId)
    console.log(person)

    // POST...
    let newPerson = {
        id: 2,
        name: "Bob Jones",
        age: 44
    }
    let res = await addPerson(newPerson)
    console.log(res)

    // DELETE...
    let result = await deletePerson(1);
    console.log(result)
}

main();
