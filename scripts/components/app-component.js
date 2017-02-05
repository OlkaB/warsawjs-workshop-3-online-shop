(function () {
    'use strict';

    class AppComponent {
        constructor() {
            this.templateUrl = '/scripts/components/app-component.html';
        }
    }

    angular.module('shop')
        .component('app', new AppComponent);
}());
