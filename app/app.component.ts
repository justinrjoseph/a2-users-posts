import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from './home.component';
import {NavbarComponent} from './layout/navbar.component';
import {PostsComponent} from './posts/posts.component';
import {UsersComponent} from './users/users.component';
import {UserFormComponent} from './users/user-form.component';
import {NotFoundComponent} from './not-found.component';

@RouteConfig([
		{ path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
		{ path: '/users', name: 'Users', component: UsersComponent },
		{ path: '/users/new', name: 'New User', component: UserFormComponent },
		{ path: '/users/:id', name: 'Edit User', component: UserFormComponent },
		{ path: '/not-found', name: 'Not Found', component: NotFoundComponent },
		{ path: '/posts', name: 'Posts', component: PostsComponent },
		{ path: '/*other', name: 'Other', redirectTo: ['Home'] }
])
@Component({
    selector: 'my-app',
    template: `
			<navbar></navbar>
			<div class="container">	
				<router-outlet></router-outlet>
			</div>
    `,
    directives: [NavbarComponent, ROUTER_DIRECTIVES]
})
export class AppComponent { }