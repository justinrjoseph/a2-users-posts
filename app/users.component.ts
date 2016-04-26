import {Component, OnInit} from 'angular2/core';

import {Router, RouterLink} from 'angular2/router';

import {UserService} from './user.service';

import {SpinnerComponent} from './spinner.component';

@Component({
	templateUrl: 'app/users.template.html',
	styles: [`
		.add-user-btn { margin-bottom: 10px; }
		.glyphicon-edit { color: green; }
		.glyphicon-remove { color: red; }
		.glyphicon-remove:hover { cursor: pointer; }
	`],
	directives: [SpinnerComponent, RouterLink],
	providers: [UserService]
})
export class UsersComponent implements OnInit {
	isLoading = true;
	users;

	constructor(private _userService: UserService, private _router: Router) {
	}

	ngOnInit() {
		this._userService.getUsers()
				.subscribe(users => {
					this.users = users;
					this.isLoading = false;
				});
	}

	deleteUser(user) {
		var confirmed = confirm("Are you sure you want to delete " + user.name + "?");

		if ( confirmed ) {
			var index = this.users.indexOf(user)
			this.users.splice(index, 1);
			this._userService.deleteUser(user.id)
											.subscribe(null,
												err => {
													alert("Could not delete " + user.name + ".");
													this.users.splice(index, 0, user);
												});
		}
	}
}