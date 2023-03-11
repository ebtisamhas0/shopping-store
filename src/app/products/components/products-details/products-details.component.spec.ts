import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDetailsComponent } from './products-details.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { ProductsService } from '../../service/products.service';
import { RouterTestingModule } from '@angular/router/testing';
describe('ProductsDetailsComponent', () => {
  let component: ProductsDetailsComponent;
  let fixture: ComponentFixture<ProductsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, RouterTestingModule],
      declarations: [ ProductsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
