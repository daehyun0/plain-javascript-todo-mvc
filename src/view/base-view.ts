export default class BaseView {
    constructorName:string;
    
    constructor() {
        this.constructorName = this.constructor.name;
    }

    render() {
        throw new Error("not implemented render method: " + this.constructorName);
    }
}