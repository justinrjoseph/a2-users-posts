import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {PostService} from './post.service';

@Component({
	template: `
		<h1>Posts</h1>
		<div *ngIf="isLoading">
			<i class="fa fa-spinner fa-spin fa-3x"></i>
		</div>
		<div class="col-md-6" *ngIf="posts">
			<ul class="list-group">
				<li *ngFor="#post of posts" class="list-group-item">{{ post.title }}</li>
			</ul>
		</div><!-- /.col-md-6 -->
	`,
	providers: [PostService, HTTP_PROVIDERS]
})
export class PostsComponent implements OnInit {
	isLoading = true;
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
}