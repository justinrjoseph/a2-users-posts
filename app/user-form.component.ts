import {Component, OnInit} from 'angular2/core';

import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import {EmailValidators} from './emailValidators';

import {HTTP_PROVIDERS} from 'angular2/http';

import {Router, RouteParams, CanDeactivate} from 'angular2/router';

import {UserService} from './user.service';
import {User} from './user';

@Component({
	templateUrl: 'app/user-form.template.html',
	providers: [UserService, HTTP_PROVIDERS]
})
export class UserFormComponent implements OnInit, CanDeactivate {
	form: ControlGroup;
	title: string;
	user = new User();

	constructor(
		fb: FormBuilder,
		private _userService: UserService,
		private _router: Router,
		private _routeParams: RouteParams) {

		this.form = fb.group({
			name: ['', Validators.required],
			email: ['', Validators.compose([
				Validators.required,
				EmailValidators.mustBeValid
			])],
			phone: [],
			address: fb.group({
				street: [],
				suite: [],
				city: [],
				zip: []
			})
		});
	}

	ngOnInit() {
		var id = this._routeParams.get('id');

		this.title = id ? "Edit User" : "Add a User";

		if ( !id )
				return;

		this._userService.getUser(id)
				.subscribe(
					user => this.user = user,
					response => {
						if ( response.status === 404 )
							this._router.navigate(['Not Found']);
					});
	}

	routerCanDeactivate(next, previous) {
		if ( this.form.dirty )
			return confirm("Your User information isn't saved. Are you sure you want to leave?");
	}

	save() {
		this._userService.createUser(this.form.value)
				.subscribe(x => {
				// in the future: this.form.markAsPristine();
					this._router.navigate(['Users']);
				});
	}
}