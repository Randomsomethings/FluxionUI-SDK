"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FluxionEngine {
    constructor() {
        this.components = [];
    }
    addComponent(component) {
        this.components.push(component);
    }
    render() {
        this.components.forEach(component => component.render());
    }
}
exports.default = FluxionEngine;
