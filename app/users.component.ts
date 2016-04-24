import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouterLink} from 'angular2/router';
import {UserService} from './user.service';

@Component({
	templateUrl: 'app/users.template.html',
	styles: [`
		.add-user-btn { margin-bottom: 10px; }
		.glyphicon-edit { color: green; }
	`],
	directives: [RouterLink],
	providers: [UserService, HTTP_PROVIDERS]
})
export class UsersComponent implements OnInit {
	isLoading = true;
	users;

	constructor(private _userService: UserService) {
	}

	ngOnInit() {
		this._userService.getUsers()
				.subscribe(users => {
					this.users = users;
					this.isLoading = false;
				});
	}
}