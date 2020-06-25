const axios = require('axios');

function someService() {
    function getData(id) {
        return new Promise((resolve, reject) => {
            console.log(id);
            axios.get('http://someurl.com')
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    return { getData };
}

module.exports = someService();
