System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EmailValidators;
    return {
        setters:[],
        execute: function() {
            EmailValidators = (function () {
                function EmailValidators() {
                }
                EmailValidators.mustBeValid = function (control) {
                    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (!control.value.match(regex))
                        return { invalidEmail: true };
                    return null;
                };
                return EmailValidators;
            }());
            exports_1("EmailValidators", EmailValidators);
        }
    }
});
//# sourceMappingURL=emailValidators.js.map