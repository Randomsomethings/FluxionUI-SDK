"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Button {
    constructor(label, onClick) {
        this.label = label;
        this.onClick = onClick;
    }
    render() {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.label;
        buttonElement.addEventListener('click', this.onClick);
        document.body.appendChild(buttonElement);
    }
}
exports.default = Button;
