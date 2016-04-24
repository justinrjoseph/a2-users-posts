System.register(['angular2/core', 'angular2/common', './emailValidators'], function(exports_1, context_1) {
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
    var core_1, common_1, emailValidators_1;
    var NewUserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (emailValidators_1_1) {
                emailValidators_1 = emailValidators_1_1;
            }],
        execute: function() {
            NewUserComponent = (function () {
                function NewUserComponent(fb) {
                    this.form = fb.group({
                        name: ['', common_1.Validators.required],
                        email: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                emailValidators_1.EmailValidators.mustBeValid
                            ])]
                    });
                }
                NewUserComponent.prototype.routerCanDeactivate = function (next, previous) {
                    if (this.form.dirty)
                        return confirm("Your User information isn't saved. Are you sure you want to leave?");
                };
                NewUserComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/new-user.template.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], NewUserComponent);
                return NewUserComponent;
            }());
            exports_1("NewUserComponent", NewUserComponent);
        }
    }
});
//# sourceMappingURL=new-user.component.js.map