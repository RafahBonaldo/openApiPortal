import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PortalPanLibModule } from 'portal-pan-lib';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CustomerReducer } from './store/reducers/customer.reducer';

import { CustomersViewComponent } from './customers-view/customers-view.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { environment } from './../environments/environment';
import { KeysPipe } from './pipe/key.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CustomersViewComponent,
    CustomerAddComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    PortalPanLibModule,
    StoreModule.forRoot({ customers: CustomerReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  exports: [
    KeysPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
