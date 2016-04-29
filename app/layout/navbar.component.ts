import {Component} from 'angular2/core';
import {Router, RouterLink} from 'angular2/router';

@Component({
	selector: 'navbar',
	templateUrl: 'app/layout/navbar.template.html',
	styles: [`
  	a:hover { color: lime; }
  `],
  directives: [RouterLink]
})
export class NavbarComponent {
	constructor(private _router: Router) {
	}

	isActive(instruction: any[]) : boolean {
		return this._router.isRouteActive(this._router.generate(instruction))
	}
}