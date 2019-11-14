# Syncfusion - angular 4 ui component

Syncfusion Angular4 UI Components is a collection of modern TypeScript based true Angular Components. It has support for Ahead Of Time (AOT) compilation and Tree-Shaking. All the components are developed from the ground up to be lightweight, responsive, modular and touch friendly.

## Create a sample 

## Installing Syncfusion grid package

Syncfusion packages are distributed in npm as `@syncfusion` scoped packages. You can get all the angular syncfusion package from npm [link]( https://www.npmjs.com/search?q=%40syncfusion%2Fej2-angular- ).

Add `@syncfusion/ej2-angular-grids` package to the application.

```bash
npm install @syncfusion/ej2-angular-grids --save
(or)
npm i @syncfusion/ej2-angular-grids --save
```

## Installing Syncfusion grid package with Custom Tagname

You can also change the tag name of Syncfusion Angular UI Controls. 

Run the below command to add `@syncfusion/ej2-angular-grids` package to the application with the desired tag name `custom`.

```bash
SET tagName=custom && npm install @syncfusion/ej2-angular-grids
```
After executing the above command, the Syncfusion Angular UI component selector will be changed. For example, the tag name of `<ejs-grid>` will be changed into `<custom-grid>`.


## Adding Grid module

After installing the package, the component modules are available to configure into your application from the installed syncfusion package. Syncfusion Angular package provides two different types of `ngModules`.

Refer to [`Ng-Module`](https://ej2.syncfusion.com/angular/documentation/common/ng-module.html) to learn about `ngModules`.

Refer to the following snippet to import the grid module in `app.module.ts` from the `@syncfusion/ej2-angular-grids`.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [PageService,
                SortService,
                FilterService,
                GroupService]
})
export class AppModule { }
```

## Adding Syncfusion component

Add the grid component snippet in `app.component.ts` as follows.

```typescript
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

    public data: Object[];

    ngOnInit(): void {
        this.data = data;
    }
}
```

## Adding CSS reference

The following CSS files are available in `../node_modules/@syncfusion` package folder. This can be referenced in [src/styles.css] using following code.

```typescript
@import '../node_modules/@syncfusion/ej2-angular-grids/styles/material.css';
```

## Running the application in a Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Building the application 

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
