angular.module("miniRouting", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "js/home/homeTmpl.html",
      controller: "homeCtrl"
    })
    .state("settings", {
      url: "/settings",
      templateUrl: "js/settings/settingsTmpl.html",
      controller: "settingsCtrl"
    })
    .state("products", {
      url: "/products/:id",
      templateUrl: "js/products/productTmpl.html",
      controller: "productsCtrl"
    });


  $urlRouterProvider
    .otherwise("/");

});

//NOT 100% on the above adresses, may get an error.
