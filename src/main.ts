import db from "./db.js";

const users = await db.users.many();
console.log(users);
