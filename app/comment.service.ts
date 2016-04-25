import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';
import {Comment} from './comment';

@Injectable()
export class CommentService {
	private _url = "http://jsonplaceholder.typicode.com/posts";

	constructor(private _http: Http) {
	}

	getComments(id) : Observable<Comment> {
		return this._http.get(this._url + '/' + id + '/comments')
							.map(res => res.json());
	}
}