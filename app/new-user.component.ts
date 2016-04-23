import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';

@Component({
	template: `
		<h1>Add a User</h1>
		<div class="col-md-6 well">
			<form>
				<fieldset>
					<legend>User</legend>
					<div class="form-group">
						<label for="name">Name</label>
						<input type="text" ngControl="name" class="form-control">
					</div>
					<div class="form-group">
						<label for="Email">Email</label>
						<input type="email" ngControl="email" class="form-control">
					</div>
					<div class="form-group">
						<label for="phone">Phone</label>
						<input type="phone" ngControl="phone" class="form-control">
					</div>
				</fieldset>
				<fieldset>
					<legend>Address</legend>
					<div class="form-group">
						<label for="street">Street</label>
						<input type="text" ngControl="street" class="form-control">
					</div>
					<div class="form-group">
						<label for="suite">Suite</label>
						<input type="text" ngControl="suite" class="form-control">
					</div>
					<div class="form-group">
						<label for="city">City</label>
						<input type="text" ngControl="city" class="form-control">
					</div>
					<div class="form-group">
						<label for="zip">Zip Code</label>
						<input type="number" ngControl="zip" class="form-control">
					</div>
				</fieldset>
				<button class="btn btn-primary" type="submit">Save</button>
			</form>
		</div>
	`
})
export class NewUserComponent {
	form: ControlGroup;

	constructor(private _fb: FormBuilder) {
		this.form = this._fb.group({
			name: ['', Validators.required],
			email: ['', Validators.required],
			phone: ['', Validators.required],
			street: ['', Validators.required],
			suite: ['', Validators.required],
			city: ['', Validators.required],
			zip: ['', Validators.required]
		});
	}
}