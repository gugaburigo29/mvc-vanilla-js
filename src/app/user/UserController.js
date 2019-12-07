import {Controller} from "../common/Controller.js";

class UserController extends Controller {

    /**
     * @param {UserService} userService
     * @param {UserView} userView
     */
    constructor(userService, userView) {
        super(userService, userView);

        this.service.onUserListChanged(this.onListChanged);
        this.view.onAddUser(this.handleAddUser);
        this.view.onRemoveUser(this.handleRemoveUser)
    }

    onListChanged = (users) => {
        this.view.displayUsers(users);
    };

    handleAddUser = (user) => {
        this.service.add(user);
    };

    handleRemoveUser = (uid) => {
        this.service.remove(uid);
    };

    render() {
        this.view.render();
    }
}

export {UserController}