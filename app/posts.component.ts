import {Component, OnInit} from 'angular2/core';

import {HTTP_PROVIDERS} from 'angular2/http';

import {UserService} from './user.service';
import {PostService} from './post.service';

import {SpinnerComponent} from './spinner.component';

@Component({
	templateUrl: 'app/posts.template.html',
	styles: [`
		.users { margin-bottom: 10px; }
		.list-group-item { cursor: pointer; }
		.list-group-item:hover { background-color: #f5f5f5; }
		hr { width: 75%; }
		.comment {
			margin-left: 20px;
			margin-right: 20px;
		}
		.comment-author { border-radius: 100%; }
	`],
	directives: [SpinnerComponent],
	providers: [HTTP_PROVIDERS, UserService, PostService]
})
export class PostsComponent implements OnInit {
	loadingPosts = true;
	loadingComments;
	users;
	selectedPost;
	posts = [];
	comments = [];

	constructor(private _userService: UserService, private _postService: PostService) {
	}

	ngOnInit() {
		this._userService.getUsers()
				.subscribe(users => this.users = users);

		this._postService.getPosts('all')
				.subscribe(posts => {
					this.posts = posts;
					this.loadingPosts = false;
				});
	}

	filterPosts(userId) {
		this.loadingPosts = true;

		this._postService.getPosts(userId)
				.subscribe(posts => {
					this.loadingPosts = false;
					this.posts = posts });
	}

	displayPost(post) {
		this.loadingComments = true;
		this.selectedPost = post;
		this._postService.getComments(post.id)
				.subscribe(comments => {
					this.loadingComments = false;
					this.comments = comments;
				});
	}
}