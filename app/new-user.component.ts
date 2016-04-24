import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import {EmailValidators} from './emailValidators';


@Component({
	templateUrl: 'app/new-user.template.html'
})
export class NewUserComponent {
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
}