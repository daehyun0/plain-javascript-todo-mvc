export default class TodoModel {
    private _startDate!:Date;
    startDate!: Date;

    constructor(title:string, content: string, startDate: Date) {
        Object.defineProperty(this, 'startDate', {
            get: () => {
                console.log('getStartDate'); 
                return this._startDate;
            },
            set: (v) => {
                console.log('setStartDate');
                this._startDate = v;
            }
        });
    }
}
