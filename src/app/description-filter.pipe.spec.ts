import { DescriptionFilterPipe } from './description-filter.pipe';
import { TodoItem } from "./todo-item";

describe('DescriptionFilterPipe', () => {
    let pipe: DescriptionFilterPipe;
    let list: TodoItem[];

    beforeEach(() => {
        pipe = new DescriptionFilterPipe();

        list = [
            new TodoItem('Jack Black'),
            new TodoItem('Alice'),
            new TodoItem('Dolly'),
            new TodoItem('Iron Man')
        ];

    });

    it('should can filter itens with full description', () => {
        let newList = pipe.transform(list, 'Dolly');

        expect(newList.length).toBe(1);
        expect(newList[0].description).toBe(list[2].description);
    });

    it('should can filter itens with part of description', () => {
        let newList = pipe.transform(list, 'ice');

        expect(newList.length).toBe(1);
        expect(newList[0]).toBe(list[1]);
    });

    it('should can filter with case no sensitive', () => {
        let newList = pipe.transform(list, 'iron man');

        expect(newList.length).toBe(1);
        expect(newList[0].description).toBe('Iron Man');
    });
});
