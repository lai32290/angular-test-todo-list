import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-tag-options',
    templateUrl: './tag-options.component.html',
    styleUrls: ['./tag-options.component.css']
})
export class TagOptionsComponent implements OnInit {
    @Input()
    items: string[] = [];

    @Output()
    itemClick:EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

}
