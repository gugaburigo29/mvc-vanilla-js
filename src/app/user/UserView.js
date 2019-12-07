import {View} from "../common/View.js";

class UserView extends View {

    constructor(selector) {
        super(selector);

        this._createComponents();
    }

    get nameText() {
        return this.inputName.value;
    }

    get ageText() {
        return this.inputAge.value;
    }

    render() {
        this.insertChild('app', 'inputName');
        this.insertChild('app', 'inputAge');
        this.insertChild('app', 'btnSubmit');
        this.insertChild('app', 'listUsers');
    }

    /**
     * @param {User[]} users
     */
    displayUsers(users) {
        this._clearList();

        users.forEach(user => {
            const li = this.createElement(null, {tag: 'li', className: 'list-item'});
            const buttonRemove = this.createElement(null, {tag: 'button', className: 'btn btn-sm btn-danger'});

            buttonRemove.innerText = 'Remove';
            buttonRemove.addEventListener('click', e => {
                e.preventDefault();
                this._removeUser(user.uid);
            });

            li.innerText = user.name;
            li.appendChild(buttonRemove);

            this.listUsers.appendChild(li);
        })
    }

    /**
     * @private
     */
    _clearList() {
        while (this.listUsers.firstChild) {
            this.listUsers.removeChild(this.listUsers.firstChild);
        }
    }

    /**
     * @param {Function} callback
     */
    onAddUser(callback) {
        this._addUser = callback;
    }

    /**
     * @param {Function} callback
     */
    onRemoveUser(callback) {
        this._removeUser = callback;
    }

    /**
     * @private
     */
    _addUser() {

    }

    /**
     * @private
     */
    _removeUser() {

    }

    /**
     * @private
     */
    _createComponents() {
        this.createElement('divUser', {tag: 'div', className: 'bg-danger'});

        this.createInput('inputName', {className: 'form-control', type: 'text', placeholder: 'Username'});
        this.createInput('inputAge', {className: 'form-control', type: 'text', placeholder: 'Age'});

        this.createElement('btnSubmit', {tag: 'button', className: 'btn btn-primary'});
        this.btnSubmit.innerText = 'add';
        this.btnSubmit.addEventListener('click', () => {
            this._addUser({
                name: this.nameText,
                age: this.ageText
            })
        });

        this.createElement('listUsers', {tag: 'ul', className: 'list'});
    }

}

export {UserView}