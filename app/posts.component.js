System.register(['angular2/core', './post.service', './user.service', './spinner.component', './pagination.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, post_service_1, user_service_1, spinner_component_1, pagination_component_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            },
            function (pagination_component_1_1) {
                pagination_component_1 = pagination_component_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(_userService, _postService) {
                    this._userService = _userService;
                    this._postService = _postService;
                    this.users = [];
                    this.posts = [];
                    this.pagedPosts = [];
                    this.comments = [];
                    this.pageCount = 10;
                }
                PostsComponent.prototype.ngOnInit = function () {
                    this.loadUsers();
                    this.loadPosts();
                };
                PostsComponent.prototype.filterPosts = function (filter) {
                    this.selectedPost = null;
                    this.loadPosts(filter);
                };
                PostsComponent.prototype.displayPost = function (post) {
                    var _this = this;
                    this.loadingComments = true;
                    this.selectedPost = post;
                    this._postService.getComments(post.id)
                        .subscribe(function (comments) {
                        _this.loadingComments = false;
                        _this.comments = comments;
                    });
                };
                PostsComponent.prototype.pageChanged = function (page) {
                    this.pagedPosts = this.getPostsForPage(page);
                };
                PostsComponent.prototype.loadUsers = function () {
                    var _this = this;
                    this._userService.getUsers()
                        .subscribe(function (users) { return _this.users = users; });
                };
                PostsComponent.prototype.loadPosts = function (filter) {
                    var _this = this;
                    this.loadingPosts = true;
                    this._postService.getPosts(filter)
                        .subscribe(function (posts) {
                        _this.loadingPosts = false;
                        _this.posts = posts;
                        _this.pagedPosts = _this.getPostsForPage(1);
                    });
                };
                PostsComponent.prototype.getPostsForPage = function (page) {
                    var postsForPage = [];
                    var startingIndex = (page - 1) * this.pageCount;
                    var endingIndex = Math.min(startingIndex + this.pageCount, this.posts.length);
                    for (var i = startingIndex; i < endingIndex; i++)
                        postsForPage.push(this.posts[i]);
                    return postsForPage;
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/posts.template.html',
                        styles: ["\n\t\t.users { margin-bottom: 10px; }\n\t\t.list-group-item { cursor: pointer; }\n\t\t.list-group-item:hover { background-color: #f5f5f5; }\n\t\thr { width: 75%; }\n\t\t.comment {\n\t\t\tmargin-left: 20px;\n\t\t\tmargin-right: 20px;\n\t\t}\n\t\t.comment-author { border-radius: 100%; }\n\t"],
                        directives: [spinner_component_1.SpinnerComponent, pagination_component_1.PaginationComponent],
                        providers: [post_service_1.PostService, user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, post_service_1.PostService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map