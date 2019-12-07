import {generateUID} from "../../utils/genereta-uid.js";


class User {

    constructor({uid, name, age, height} = {uid: generateUID(), name: '', age: 0, height: 0}) {
        this.uid = uid || generateUID();
        this.name = name;
        this.age = age;
        this.height = height;
    }


}

export {User}