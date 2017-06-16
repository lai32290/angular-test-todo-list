export class TodoItem {
    description: string;
    done: boolean;

    constructor(description:string = '', done:boolean = false) {
        this.description = description;
        this.done = done;
    }
}
