import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouterLink} from 'angular2/router';
import {UserService} from './user.service';

@Component({
	template: `
		<h1>Users</h1>
		<a class="btn btn-primary add-user-btn" [routerLink]="['New User']">Add User</a>
		<div *ngIf="isLoading">
			<i class="fa fa-spinner fa-spin fa-3x"></i>
		</div>
		<table class="table table-bordered">
			<tr *ngIf="users">
				<th>Name</th>
				<th>Email</th>
				<th>Edit</th>
				<th>Delete</th>
			</tr>
			<tr *ngFor="#user of users">
			  <td>{{ user.name }}</td>
			  <td>{{ user.email }}</td>
			  <td><i class="glyphicon glyphicon-edit"></i></td>
			  <td><i class="glyphicon glyphicon-remove"></i></td>
			</tr>
		</table>
	`,
	styles: [`
		.add-user-btn { margin-bottom: 10px; }
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