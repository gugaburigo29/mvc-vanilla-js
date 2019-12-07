import {users} from "../../mocks/users-mock.js";
import {User} from "./User.js";

class UserService {

    constructor() {
        this.users = users;
    }

    /**
     * @param {User} user
     */
    add(user) {
        this.users.push(
            user instanceof User
                ? user
                : new User(user)
        );

        this._commit();
    }

    /**
     * @param {User | string} user
     */
    remove(user) {
        this.users = this.users.filter(_user =>
            _user.uid !== (user instanceof User ? user.uid : user)
        );

        this._commit();
    }

    /**
     * @param {User} user
     */
    edit(user) {
        this.users = this.users.map(_user => {
            _user.uid === user.uid
                ? new User({..._user, ...user})
                : _user
        })
    }

    /**
     * @param {Function} callback
     */
    onUserListChanged(callback) {
        this._onChanged = callback;
    }

    /**
     * @private
     */
    _commit() {
        this._onChanged(this.users);
    }

    /**
     * @private
     */
    _onChanged() {

    }
}

export {UserService}