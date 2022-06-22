const axios = require('axios').default;

const getPerson = async (userId) => {
    let r = await axios.get(`http://localhost:5150/person/${userId}`);
    console.log(r.data);
}

const addPerson = async (person) => {
    let r = await axios.post(`http://localhost:5150/person/`, person);
    console.log(r.data);
}

const main = async () => {
    // let userId = 1
    // getPerson(userId)

    let p = {
        id: 3,
        name: "Alice in Chains",
        age: 44
    }
    addPerson(p)
}

main();
