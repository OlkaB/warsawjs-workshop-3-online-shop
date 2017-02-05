(function () {
    'use strict';

    const TEMPLATE = `
        <div class="card small blue-grey darken-1">
            <div class="card-content white-text">
                <h6 class="card-title">{{ $ctrl.product.name }}</h6>
                <img
                    class="circle left"
                    ng-src="{{ $ctrl.product.image }}" alt=""/>
                <p>{{ $ctrl.product.description }}</p>
            </div>
            <div class="card-action">
                <product-add-to-cart></product-add-to-cart>
                <input type="number" name="quantity" ng-model="$ctrl.amount" />
                <button class="btn" ng-click="$ctrl.addToCart($ctrl.product, quantity); $event.stopPropagation()">add to cart</button>
                <button class="btn" ng-click="$ctrl.onDelete({$product:$ctrl.product}); $event.stopPropagation()">delete</button>
            </div>
        </div>
    `;

    class ProductComponent {
        constructor() {
            this.bindings = {
                product: '<',
                onDelete: '&'
            };
            this.require = {
                productList: '^^'
            };
            this.controller = ProductComponentController;
            this.template = TEMPLATE;
        }
    }

    class ProductComponentController {
        constructor(CartService) {
            this.product = null;
            this.cartService = CartService;
            this.amount=1;
        }

        $onInit() {
            //this.product = this.productList.getProductByIndex(this.productIndex);
        }

        addToCart(product, quantity){
            console.log('produkt dodany do koszyka ', product);
            this.cartService.appendCart(product, this.amount);
            this.amount=1;
            //sessionStorage.userCart += angular.toJson(cartService);
        }
    }

    angular.module('shop')
        .component('product', new ProductComponent);
}());
