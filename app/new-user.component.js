System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var NewUserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            NewUserComponent = (function () {
                function NewUserComponent(_fb) {
                    this._fb = _fb;
                    this.form = this._fb.group({
                        name: ['', common_1.Validators.required],
                        email: ['', common_1.Validators.required],
                        phone: ['', common_1.Validators.required],
                        street: ['', common_1.Validators.required],
                        suite: ['', common_1.Validators.required],
                        city: ['', common_1.Validators.required],
                        zip: ['', common_1.Validators.required]
                    });
                }
                NewUserComponent = __decorate([
                    core_1.Component({
                        template: "\n\t\t<h1>Add a User</h1>\n\t\t<div class=\"col-md-6 well\">\n\t\t\t<form>\n\t\t\t\t<fieldset>\n\t\t\t\t\t<legend>User</legend>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"name\">Name</label>\n\t\t\t\t\t\t<input type=\"text\" ngControl=\"name\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"Email\">Email</label>\n\t\t\t\t\t\t<input type=\"email\" ngControl=\"email\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"phone\">Phone</label>\n\t\t\t\t\t\t<input type=\"phone\" ngControl=\"phone\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t</fieldset>\n\t\t\t\t<fieldset>\n\t\t\t\t\t<legend>Address</legend>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"street\">Street</label>\n\t\t\t\t\t\t<input type=\"text\" ngControl=\"street\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"suite\">Suite</label>\n\t\t\t\t\t\t<input type=\"text\" ngControl=\"suite\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"city\">City</label>\n\t\t\t\t\t\t<input type=\"text\" ngControl=\"city\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"zip\">Zip Code</label>\n\t\t\t\t\t\t<input type=\"number\" ngControl=\"zip\" class=\"form-control\">\n\t\t\t\t\t</div>\n\t\t\t\t</fieldset>\n\t\t\t\t<button class=\"btn btn-primary\" type=\"submit\">Save</button>\n\t\t\t</form>\n\t\t</div>\n\t"
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