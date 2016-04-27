import {Component, Input, Output, EventEmitter, OnChanges} from 'angular2/core';

@Component({
	selector: 'pagination',
	template: `
		<nav *ngIf="items.length > pageSize">
		  <ul class="pagination">
		    <li>
		      <a href="#" aria-label="Previous">
		        <span aria-hidden="true">&laquo;</span>
		      </a>
		    </li>
		    <li *ngFor="#page of pages"><a>{{ page }}</a></li>
		    <li>
		      <a href="#" aria-label="Next">
		        <span aria-hidden="true">&raquo;</span>
		      </a>
		    </li>
		  </ul>
		</nav>
	`
})
export class PaginationComponent implements OnChanges {
	@Input() items = [];
	pageSize = 10;
	pages: any[];
	currentPage;

	ngOnChanges() {
		this.currentPage = 1;

		var pagesCount = this.items.length / this.pageSize;
		this.pages = [];

		for ( var i = 1; i == pagesCount; i++ ) {
			this.pages.push(i);
		}
	}
}