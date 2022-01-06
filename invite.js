require("dotenv").config();
const fs = require("fs");
const axios = require("axios");

let emails = fs.readFileSync("emails.txt", "utf8", function (err) {
  if (err) throw err;
});
emails = emails.split("\n");

const inviteMember = async (email) => {
    const token = process.env.GITHUB_TOKEN;
    const org = process.env.ORGANIZATION;
    axios.defaults.headers.common["Accept"] = "application/vnd.github.v3+json";
    axios.defaults.headers.common["Authorization"] = `token ${token}`;
    axios
        .post(`https://api.github.com/orgs/${org}/invitations`, { email: email })
        .then(function (response) {
        console.log(
            response.status === 201
            ? "Send to " + email + ": Success"
            : "Send to " + email + ": Failed"
        );
        })
        .catch(function (error) {
            console.log(error);
        });

};

for (email of emails) {
    inviteMember(email);
}
