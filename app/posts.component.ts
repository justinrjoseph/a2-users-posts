import {Component, OnInit} from 'angular2/core';

import {HTTP_PROVIDERS} from 'angular2/http';

import {PostService} from './post.service';
import {Post} from './post';

import {SpinnerComponent} from './spinner.component';

@Component({
	templateUrl: 'app/posts.template.html',
	styles: [`
		.list-group-item { cursor: pointer; }
		.list-group-item:hover { background-color: #f5f5f5; }
	`],
	directives: [SpinnerComponent],
	providers: [PostService, HTTP_PROVIDERS]
})
export class PostsComponent implements OnInit {
	isLoading = true;
	showPost = false;
	post;
	posts;

	constructor(private _postService: PostService) {
	}

	ngOnInit() {
		this._postService.getPosts()
				.subscribe(posts => {
					this.posts = posts;
					this.isLoading = false;
				});
	}

	displayPost(post) {
		this.showPost = true;
		this.post = post;
	}
}