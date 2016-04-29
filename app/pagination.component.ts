import {Component, Input, Output, EventEmitter, OnChanges} from 'angular2/core';

@Component({
	selector: 'pagination',
	template: `
		<nav *ngIf="items.length > pageCount">
		  <ul class="pagination">
		    <li [class.disabled]="currentPage === 1">
		      <a (click)="previous()" aria-label="Previous">
		        <span aria-hidden="true">&laquo;</span>
		      </a>
		    </li>
		    <li [class.active]="currentPage === page" *ngFor="#page of pages">
		    	<a (click)="changePage(page)">{{ page }}</a>
		    </li>
		    <li [class.disabled]="currentPage === pages.length">
		      <a (click)="next()" aria-label="Next">
		        <span aria-hidden="true">&raquo;</span>
		      </a>
		    </li>
		  </ul>
		</nav>
	`,
	styles: [`
		a:hover { cursor: pointer; }
	`]
})
export class PaginationComponent implements OnChanges {
	@Input() items = [];
	@Input('page-count') pageCount = 10;
	@Output('page-changed') pagedChanged = new EventEmitter();
	pages: any[];
	currentPage;

	ngOnChanges() {
		this.currentPage = 1;

		var numberOfPages = this.items.length / this.pageCount;

		this.pages = [];

		for ( var i = 1; i <= numberOfPages; i++ ) {
			this.pages.push(i);
		}
	}

	changePage(page) {
		this.currentPage = page;
	}

	previous() {
		if ( this.currentPage === 1 )
			return;

		this.currentPage--;
	}

	next() {
		if ( this.currentPage === this.pages.length )
			return;

		this.currentPage++;
	}
}