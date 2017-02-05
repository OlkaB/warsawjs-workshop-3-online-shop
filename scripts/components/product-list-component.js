(function () {
    'use strict';

    const TEMPLATE = `
        <div
            class="col l4"
            ng-repeat="product in $ctrl.products track by $index">
            <product
            ng-click="$ctrl.onProductClick(product)"
            on-delete="$ctrl.onProductDelete($product, $index)" 
                class="row" 
                product="product">
            </product>
        </div>
    `;

    class ProductListComponent {
        constructor() {
            this.bindings = {};
            this.controller = ProductListComponentController;
            this.template = TEMPLATE;
        }
    }

    class ProductListComponentController {
        constructor(ProductsService) {
            this.products = [];
            this.ProductsService = ProductsService;
        }

        $onInit() {
            this.ProductsService.$get()
                .then(( data ) => {
                    this.products = this.products.concat(data);
                });
        }

        getProductByIndex(index) {
            return this.products[index];
        }

        onProductClick(product){
            console.log('produkt kliknięty ', product.name);
        }

        onProductDelete($product, index){
            console.log('produkt skasowany ', $product.name);
            this.products.splice(index,1);
        }
    }

    angular.module('shop')
        .component('productList', new ProductListComponent);
}());
