System.register(['angular2/core', 'angular2/http', 'angular2/router', './user.service'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, user_service_1;
    var UsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            UsersComponent = (function () {
                function UsersComponent(_userService) {
                    this._userService = _userService;
                    this.isLoading = true;
                }
                UsersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._userService.getUsers()
                        .subscribe(function (users) {
                        _this.users = users;
                        _this.isLoading = false;
                    });
                };
                UsersComponent = __decorate([
                    core_1.Component({
                        template: "\n\t\t<h1>Users</h1>\n\t\t<a class=\"btn btn-primary add-user-btn\" [routerLink]=\"['New User']\">Add User</a>\n\t\t<div *ngIf=\"isLoading\">\n\t\t\t<i class=\"fa fa-spinner fa-spin fa-3x\"></i>\n\t\t</div>\n\t\t<table class=\"table table-bordered\">\n\t\t\t<tr *ngIf=\"users\">\n\t\t\t\t<th>Name</th>\n\t\t\t\t<th>Email</th>\n\t\t\t\t<th>Edit</th>\n\t\t\t\t<th>Delete</th>\n\t\t\t</tr>\n\t\t\t<tr *ngFor=\"#user of users\">\n\t\t\t  <td>{{ user.name }}</td>\n\t\t\t  <td>{{ user.email }}</td>\n\t\t\t  <td><i class=\"glyphicon glyphicon-edit\"></i></td>\n\t\t\t  <td><i class=\"glyphicon glyphicon-remove\"></i></td>\n\t\t\t</tr>\n\t\t</table>\n\t",
                        styles: ["\n\t\t.add-user-btn { margin-bottom: 10px; }\n\t"],
                        directives: [router_1.RouterLink],
                        providers: [user_service_1.UserService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], UsersComponent);
                return UsersComponent;
            }());
            exports_1("UsersComponent", UsersComponent);
        }
    }
});
//# sourceMappingURL=users.component.js.map