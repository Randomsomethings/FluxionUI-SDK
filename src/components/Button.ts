class Button {
    label: string;
    onClick: () => void;

    constructor(label: string, onClick: () => void) {
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

export default Button;
