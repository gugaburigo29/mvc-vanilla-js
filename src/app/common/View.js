class View {

    constructor(app) {
        this.setApp(app);
    }

    /**
     * @param {string|null} propName
     * @param {string} tag
     * @param {string} className
     * @return Element
     */
    createElement(propName, {tag, className}) {
        const el = document.createElement(tag);

        if (className) {
            const classNameArray = className.split(' ');
            el.classList.add(...classNameArray);
        }

        if (propName) {
            this[propName] = el
        }

        return el;
    }

    createInput(propName, {type, className, placeholder, name}) {
        this.createElement(propName, {tag: 'input', className});

        const el = this[propName];
        el.type = type;
        el.placeholder = placeholder;
        el.name = name;
    }

    insertChild(name, el) {
        if (typeof el == 'string') {
            this[name].appendChild(this[el]);
            return;
        }

        this[name].appendChild(el)
    }

    setApp(el) {
        if (typeof el == 'string') {
            this.app = document.querySelector(el)
        } else if (el instanceof Node) {
            this.app = el;
        }
    }
}

export {View}