(function () {
    'use strict';

    const TEMPLATE = `
        <header>
            <nav class="blue lighten-3">
                <div class="nav-wrapper">
                    <a class="brand-logo">
                        <img src="images/logo-transparent-50x50.png"/>
                        Sklep internetowy
                    </a>
                    <ul class="right">
                        <li>Koszyk {{$ctrl.cartService.getCartSize() || 0}}
                    </ul>
                    <cart-dropdown></cart-dropdown>
                </div>
            </nav>

            <product-search></product-search>
        </header>
    `;

    class PageHeader {
        constructor() {
            this.template = TEMPLATE;
            this.controller = function(CartService){
                this.cartService = CartService;
            }
        }
    }


    angular.module('shop')
        .component('pageHeader', new PageHeader);
}());
