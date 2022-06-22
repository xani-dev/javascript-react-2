const axios = require('axios').default;

const getPerson = async () => {
    let r = await axios.get('http://localhost:5150/person');
    console.log(r.data);
}

const main = async () => {
    getPerson()
}

main();
