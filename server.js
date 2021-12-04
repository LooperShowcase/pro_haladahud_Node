const fs =require("fs");
let data=fs.readdirSync("db.json");
let users=JSON.parse(data);
users["1"]={
    name:"7ala",
    country:"italy",
};

function createUser(id,name,city){
    users[id]={
        name,
        city,
    };  
}
createUser(1,"7ala","italy");
createUser(2,"Dahud","Germany");
console.log(users);

