import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import {EmailValidators} from './emailValidators';
import {CanDeactivate} from 'angular2/router';

@Component({
	templateUrl: 'app/new-user.template.html'
})
export class NewUserComponent implements CanDeactivate {
	form: ControlGroup;

	constructor(fb: FormBuilder) {
		this.form = fb.group({
			name: ['', Validators.required],
			email: ['', Validators.compose([
				Validators.required,
				EmailValidators.mustBeValid
			])]
		});
	}

	routerCanDeactivate(next, previous) {
		if ( this.form.dirty )
			return confirm("Your User information isn't saved. Are you sure you want to leave?");
	}
}