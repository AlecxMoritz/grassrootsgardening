import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrassrootsProductsComponent } from './grassroots-products.component';

describe('GrassrootsProductsComponent', () => {
  let component: GrassrootsProductsComponent;
  let fixture: ComponentFixture<GrassrootsProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrassrootsProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrassrootsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
