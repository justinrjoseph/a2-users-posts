import {Control} from 'angular2/common';

export class EmailValidators {
	static mustBeValid(control: Control) {
		var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if ( !control.value.match(regex)  )
			return { invalidEmail: true }

		return null;
	}
}