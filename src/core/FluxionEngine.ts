class FluxionEngine {
    components: any[];

    constructor() {
        this.components = [];
    }

    addComponent(component: any) {
        this.components.push(component);
    }

    render() {
        this.components.forEach(component => component.render());
    }
}

export default FluxionEngine;
