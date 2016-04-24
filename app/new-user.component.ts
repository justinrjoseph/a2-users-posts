import {Component} from 'angular2/core';

import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import {EmailValidators} from './emailValidators';

import {HTTP_PROVIDERS} from 'angular2/http';

import {Router, CanDeactivate} from 'angular2/router';

import {UserService} from './user.service';

@Component({
	templateUrl: 'app/new-user.template.html',
	providers: [UserService, HTTP_PROVIDERS]
})
export class NewUserComponent implements CanDeactivate {
	form: ControlGroup;

	constructor(fb: FormBuilder, private _userService: UserService, private _router: Router) {
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