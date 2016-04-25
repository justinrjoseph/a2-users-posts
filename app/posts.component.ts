import {Component, OnInit} from 'angular2/core';

import {HTTP_PROVIDERS} from 'angular2/http';

import {PostService} from './post.service';

import {SpinnerComponent} from './spinner.component';

@Component({
	templateUrl: 'app/posts.template.html',
	styles: [`
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
	providers: [HTTP_PROVIDERS, PostService]
})
export class PostsComponent implements OnInit {
	ifLoadingPosts = true;
	ifLoadingComments;
	selectedPost;
	posts = [];
	comments = [];

	constructor(private _postService: PostService) {
	}

	ngOnInit() {
		this._postService.getPosts()
				.subscribe(posts => {
					this.posts = posts;
					this.ifLoadingPosts = false;
				});
	}

	displayPost(post) {
		this.ifLoadingComments = true;
		this.selectedPost = post;
		this._postService.getComments(post.id)
				.subscribe(comments => {
					this.ifLoadingComments = false;
					this.comments = comments;
				});
	}
}