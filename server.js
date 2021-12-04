const fs = require("fs");
let data = fs.readFileSync("db.json");
let users = JSON.parse(data);
users["1"] = {
  name: "7ala",
  country: "italy",
};

function createUser(id, name, city) {
  users[id] = {
    name,
    city,
  };
}
function readuser(id) {
  return users[id];
}
function Delete(id) {
  delete users[id];
}
function Update(id, name, city) {
  if (users[id] == undefined) {
    console.error("there is no such user as ..");
  } else {
    users[id] = {
      name: name,
      city: city,
    };
  }
}
createUser(0, "7ala", "italy");
createUser(1, "Dahud", "Germany");
createUser(2, "none", "UK");
createUser(3, "abc", "USA");
let someuser = readuser("0");
Delete("3");
Update(2, "aa", "idk");
console.log(someuser);
let dataToString = JSON.stringify(users);
fs.writeFileSync("db.json", dataToString);
