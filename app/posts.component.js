System.register(['angular2/core', 'angular2/http', './user.service', './post.service', './spinner.component'], function(exports_1, context_1) {
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
    var core_1, http_1, user_service_1, post_service_1, spinner_component_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(_userService, _postService) {
                    this._userService = _userService;
                    this._postService = _postService;
                    this.loadingPosts = true;
                    this.posts = [];
                    this.comments = [];
                }
                PostsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._userService.getUsers()
                        .subscribe(function (users) { return _this.users = users; });
                    this._postService.getPosts('all')
                        .subscribe(function (posts) {
                        _this.posts = posts;
                        _this.loadingPosts = false;
                    });
                };
                PostsComponent.prototype.filterPosts = function (userId) {
                    var _this = this;
                    this.loadingPosts = true;
                    this._postService.getPosts(userId)
                        .subscribe(function (posts) {
                        _this.loadingPosts = false;
                        _this.posts = posts;
                    });
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
                PostsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/posts.template.html',
                        styles: ["\n\t\t.users { margin-bottom: 10px; }\n\t\t.list-group-item { cursor: pointer; }\n\t\t.list-group-item:hover { background-color: #f5f5f5; }\n\t\thr { width: 75%; }\n\t\t.comment {\n\t\t\tmargin-left: 20px;\n\t\t\tmargin-right: 20px;\n\t\t}\n\t\t.comment-author { border-radius: 100%; }\n\t"],
                        directives: [spinner_component_1.SpinnerComponent],
                        providers: [http_1.HTTP_PROVIDERS, user_service_1.UserService, post_service_1.PostService]
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