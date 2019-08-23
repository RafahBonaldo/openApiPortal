import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { Store, select } from '@ngrx/store';
import { CustomerRemove } from '../store/actions/customer.actions';

@Component({
  selector: 'app-customers-view',
  templateUrl: './customers-view.component.html',
  styleUrls: ['./customers-view.component.scss']
})
export class CustomersViewComponent {

  
  customers: Observable<Customer[]>;

  constructor(private store: Store<{customers: Customer[]}>) { 
    this.customers = this.store.pipe(select('customers'));
  }

  removeCustomer(customerIndex) {
    this.store.dispatch(new CustomerRemove(customerIndex));
  }

}
