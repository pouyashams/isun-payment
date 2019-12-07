import axios from "axios";

var querystring = require('querystring');

export async function login(username, password, clientId, clientSecret) {
    let access_token = null;
    let data = clientId + ':' + clientSecret;
    let buff = new Buffer(data);
    let base64data = buff.toString('base64');
    await axios({
        method: 'POST',
        url: `http://shop.isuncharge.com/isunshop/oauth/token`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + base64data,
        },
        data:  querystring.stringify({
            username: username,
            password: password,
            client_id: clientId,
            grant_type : 'password'
        })
    }).then(response => {
        access_token = response.data.access_token;

    }).catch((error) => {
        throw error
    });
    return access_token;
}
