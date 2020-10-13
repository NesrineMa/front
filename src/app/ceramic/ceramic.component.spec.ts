import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeramicComponent } from './ceramic.component';

describe('CeramicComponent', () => {
  let component: CeramicComponent;
  let fixture: ComponentFixture<CeramicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeramicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeramicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
