import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrassrootsHomeComponent } from './grassroots-home.component';

describe('GrassrootsHomeComponent', () => {
  let component: GrassrootsHomeComponent;
  let fixture: ComponentFixture<GrassrootsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrassrootsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrassrootsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
