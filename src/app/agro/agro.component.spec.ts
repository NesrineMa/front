import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgroComponent } from './agro.component';

describe('AgroComponent', () => {
  let component: AgroComponent;
  let fixture: ComponentFixture<AgroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
