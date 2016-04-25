import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';
import {Post} from './post';
import {Comment} from './comment';

@Injectable()
export class PostService {
	private _url = "http://jsonplaceholder.typicode.com/posts";

	constructor(private _http: Http) {
	}

	getPosts() : Observable<Post[]> {
		return this._http.get(this._url)
							.map(res => res.json());
	}

	getComments(id) : Observable<Comment[]> {
		return this._http.get(this._url + '/' + id + '/comments')
							.map(res => res.json());
	}
}