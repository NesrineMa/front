import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuirComponent } from './cuir.component';

describe('CuirComponent', () => {
  let component: CuirComponent;
  let fixture: ComponentFixture<CuirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
