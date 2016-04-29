import {Component, OnInit} from 'angular2/core';

import {PostService} from './post.service';
import {UserService} from '../users/user.service';

import {SpinnerComponent} from '../shared/spinner.component';
import {PaginationComponent} from '../shared/pagination.component';

@Component({
	templateUrl: 'app/posts/posts.template.html',
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
	directives: [SpinnerComponent, PaginationComponent],
	providers: [PostService, UserService]
})
export class PostsComponent implements OnInit {
	loadingPosts;
	loadingComments;
	users = [];
	selectedPost;
	posts = [];
	pagedPosts = [];
	comments = [];
	pageCount = 10;

	constructor(private _userService: UserService, private _postService: PostService) {
	}

	ngOnInit() {
		this.loadUsers();
		this.loadPosts();
	}

	filterPosts(filter) {
		this.selectedPost = null;
		this.loadPosts(filter);
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

	pageChanged(page) {
		var startingIndex = (page - 1) * this.pageCount;
		this.pagedPosts = _.take(_.rest(this.posts, startingIndex), this.pageCount);
	}

	private loadUsers() {
		this._userService.getUsers()
				.subscribe(users => this.users = users);
	}

	private loadPosts(filter?) {
		this.loadingPosts = true;		
		this._postService.getPosts(filter)
				.subscribe(posts => {
					this.loadingPosts = false;
					this.posts = posts;
					this.pagedPosts = _.take(this.posts, this.pageCount);
				});
	}
}