import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tag-input',
    templateUrl: './tag-input.component.html',
    styleUrls: ['./tag-input.component.css']
})
export class TagInputComponent implements OnInit {
    options: string[] = ["item 1", "Item 2", "Item 3"];

    constructor() { }

    click(str:string) {
        alert(str); 
    }

    ngOnInit() {
    }

}
