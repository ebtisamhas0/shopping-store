# MyStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:3000/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Components
1- cart
2- product
3- products-details
4- all-products
5- create-form
6- header

## Services
1- cart
2- product
3- shared

## Routes

  {path:"products", component:AllProductsComponent},
  {path:"details/:id", component:ProductsDetailsComponent},
  {path:"cart", component:CartComponent},
  {path:"**", redirectTo:"products", pathMatch:"full"}
];
