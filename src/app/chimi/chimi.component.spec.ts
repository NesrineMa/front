import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChimiComponent } from './chimi.component';

describe('ChimiComponent', () => {
  let component: ChimiComponent;
  let fixture: ComponentFixture<ChimiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChimiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChimiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
