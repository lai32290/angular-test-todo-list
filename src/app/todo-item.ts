export class TodoItem {
    description: string;
    done: boolean;

    constructor(description:string = '') {
        this.description = description;
        this.done = false;
    }
}
