    function ProductsServiceFactory($http) {   //$http trzeba przekazać jako argument, aby móc użyć go wewnątrz
        return {
            $get() {
                return $http.get('data/products.json')
                .then(data=> data.data.products);
            }
        };
    }

    angular.module('shop')
        .factory('ProductsService', ProductsServiceFactory); 

