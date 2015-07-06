System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var computedFrom, Welcome, UpperValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      computedFrom = _aureliaFramework.computedFrom;
    }],
    execute: function () {
      Welcome = (function () {
        function Welcome() {
          _classCallCheck(this, Welcome);

          this.heading = 'Welcome to the Aurelia+Cordova Navigation App!';
          this.firstName = 'Thom';
          this.lastName = 'Yorke';
          this.previousValue = this.fullName;
        }

        _createClass(Welcome, [{
          key: 'submit',
          value: function submit() {
            this.previousValue = this.fullName;
            alert('Welcome, ' + this.fullName + '!');
          }
        }, {
          key: 'canDeactivate',
          value: function canDeactivate() {
            if (this.fullName !== this.previousValue) {
              return confirm('Are you sure you want to leave?');
            }
          }
        }, {
          key: 'fullName',
          get: function get() {
            return this.firstName + ' ' + this.lastName;
          }
        }]);

        return Welcome;
      })();

      _export('Welcome', Welcome);

      UpperValueConverter = (function () {
        function UpperValueConverter() {
          _classCallCheck(this, UpperValueConverter);
        }

        _createClass(UpperValueConverter, [{
          key: 'toView',
          value: function toView(value) {
            return value && value.toUpperCase();
          }
        }]);

        return UpperValueConverter;
      })();

      _export('UpperValueConverter', UpperValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O29CQUVhLE9BQU8sRUEwQlAsbUJBQW1COzs7Ozs7Ozt1Q0E1QnhCLFlBQVk7OztBQUVQLGFBQU87aUJBQVAsT0FBTztnQ0FBUCxPQUFPOztlQUNsQixPQUFPLEdBQUcsZ0RBQWdEO2VBQzFELFNBQVMsR0FBRyxNQUFNO2VBQ2xCLFFBQVEsR0FBRyxPQUFPO2VBQ2xCLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUTs7O3FCQUpsQixPQUFPOztpQkFjWixrQkFBRTtBQUNOLGdCQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDbkMsaUJBQUssZUFBYSxJQUFJLENBQUMsUUFBUSxPQUFJLENBQUM7V0FDckM7OztpQkFFWSx5QkFBRztBQUNkLGdCQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLGFBQWEsRUFBRTtBQUN4QyxxQkFBTyxPQUFPLENBQUMsaUNBQWlDLENBQUMsQ0FBQzthQUNuRDtXQUNGOzs7ZUFiVyxlQUFFO0FBQ1osbUJBQVUsSUFBSSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsUUFBUSxDQUFHO1dBQzdDOzs7ZUFaVSxPQUFPOzs7eUJBQVAsT0FBTzs7QUEwQlAseUJBQW1CO2lCQUFuQixtQkFBbUI7Z0NBQW5CLG1CQUFtQjs7O3FCQUFuQixtQkFBbUI7O2lCQUN4QixnQkFBQyxLQUFLLEVBQUM7QUFDWCxtQkFBTyxLQUFLLElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1dBQ3JDOzs7ZUFIVSxtQkFBbUI7OztxQ0FBbkIsbUJBQW1CIiwiZmlsZSI6IndlbGNvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbXB1dGVkRnJvbX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgY2xhc3MgV2VsY29tZXtcbiAgaGVhZGluZyA9ICdXZWxjb21lIHRvIHRoZSBBdXJlbGlhK0NvcmRvdmEgTmF2aWdhdGlvbiBBcHAhJztcbiAgZmlyc3ROYW1lID0gJ1Rob20nO1xuICBsYXN0TmFtZSA9ICdZb3JrZSc7XG4gIHByZXZpb3VzVmFsdWUgPSB0aGlzLmZ1bGxOYW1lO1xuXG4gIC8vR2V0dGVycyBjYW4ndCBiZSBvYnNlcnZlZCB3aXRoIE9iamVjdC5vYnNlcnZlLCBzbyB0aGV5IG11c3QgYmUgZGlydHkgY2hlY2tlZC5cbiAgLy9Ib3dldmVyLCBpZiB5b3UgdGVsbCBBdXJlbGlhIHRoZSBkZXBlbmRlbmNpZXMsIGl0IG5vIGxvbmdlciBuZWVkcyB0byBkaXJ0eSBjaGVjayB0aGUgcHJvcGVydHkuXG4gIC8vVG8gb3B0aW1pemUgYnkgZGVjbGFyaW5nIHRoZSBwcm9wZXJ0aWVzIHRoYXQgdGhpcyBnZXR0ZXIgaXMgY29tcHV0ZWQgZnJvbSwgdW5jb21tZW50IHRoZSBsaW5lIGJlbG93LlxuICAvL0Bjb21wdXRlZEZyb20oJ2ZpcnN0TmFtZScsICdsYXN0TmFtZScpXG4gIGdldCBmdWxsTmFtZSgpe1xuICAgIHJldHVybiBgJHt0aGlzLmZpcnN0TmFtZX0gJHt0aGlzLmxhc3ROYW1lfWA7XG4gIH1cblxuICBzdWJtaXQoKXtcbiAgICB0aGlzLnByZXZpb3VzVmFsdWUgPSB0aGlzLmZ1bGxOYW1lO1xuICAgIGFsZXJ0KGBXZWxjb21lLCAke3RoaXMuZnVsbE5hbWV9IWApO1xuICB9XG5cbiAgY2FuRGVhY3RpdmF0ZSgpIHtcbiAgICBpZiAodGhpcy5mdWxsTmFtZSAhPT0gdGhpcy5wcmV2aW91c1ZhbHVlKSB7XG4gICAgICByZXR1cm4gY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGxlYXZlPycpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXBwZXJWYWx1ZUNvbnZlcnRlciB7XG4gIHRvVmlldyh2YWx1ZSl7XG4gICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==