import {User} from "../app/user/User.js";

const users = [
    new User(),
    new User({name: "Luís", age: 21, height: 1.75}),
    new User({name: "Kalua", age: 19, height: 1.68}),
];

export {users}