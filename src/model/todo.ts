export default class TodoModel {
    private _title!:string;
    title!: string;
    private _content!:string;
    content!: string;
    private _startDate!:Date;
    startDate!: Date;

    constructor(title:string, content: string, startDate: Date) {
        this._title = title;
        this._content = content;
        this._startDate = startDate;

        Object.defineProperty(this, 'title', {
            get: () => {
                return this._title;
            },
            set: (v) => {
                this._title = v;
            }
        });

        Object.defineProperty(this, 'content', {
            get: () => {
                return this._content;
            },
            set: (v) => {
                this._content = v;
            }
        });

        Object.defineProperty(this, 'startDate', {
            get: () => {
                return this._startDate;
            },
            set: (v) => {
                this._startDate = v;
            }
        });
    }
}
