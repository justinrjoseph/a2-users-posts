import {Component, OnInit} from 'angular2/core';

import {HTTP_PROVIDERS} from 'angular2/http';

import {PostService} from './post.service';
import {CommentService} from './comment.service';

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
	providers: [HTTP_PROVIDERS, PostService, CommentService]
})
export class PostsComponent implements OnInit {
	isLoading = true;
	showPost = false;
	post;
	posts;
	comments;

	constructor(private _postService: PostService, private _commentService: CommentService) {
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
		this._commentService.getComments(post.id)
				.subscribe(comments => this.comments = comments );
	}
}