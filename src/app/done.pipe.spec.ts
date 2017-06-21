import { DonePipe } from './done.pipe';
import { TodoItem } from "./todo-item";

describe('DonePipe', () => {
    let pipe: DonePipe;

    beforeEach(() => {
        pipe = new DonePipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should can filter item', () => {
        let list: TodoItem[] = [
            new TodoItem('Item 1'),
            new TodoItem('Item 2', true),
            new TodoItem('Item 3'),
            new TodoItem('Item 4')
        ];

        let doneList: TodoItem[] = pipe.transform(list, true);
        let doingList: TodoItem[] = pipe.transform(list, false);

        expect(doneList.length).toBe(1);
        expect(doneList[0].description).toBe(list[1].description);
        expect(doingList.length).toBe(3);
    });
});
