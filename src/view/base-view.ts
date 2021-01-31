export default class BaseView {
    constructorName:string;
    
    constructor() {
        this.constructorName = this.constructor.name;
    }

    getHTMLElement () {
        throw new Error("not implemented render method: " + this.constructorName);
    }
}