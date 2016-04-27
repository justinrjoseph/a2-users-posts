import {Component, Input, Output, EventEmitter, OnChanges} from 'angular2/core';

@Component({

})
export class PaginationComponent {
	@Input() items;
	@Input('page-size') pageSize: number = 10;
	pages: any[];
	currentPage;

	ngOnChanges() {

	}
}