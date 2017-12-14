import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpcNavbarComponent } from './gpc-navbar.component';

describe('GpcNavbarComponent', () => {
  let component: GpcNavbarComponent;
  let fixture: ComponentFixture<GpcNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpcNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpcNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
