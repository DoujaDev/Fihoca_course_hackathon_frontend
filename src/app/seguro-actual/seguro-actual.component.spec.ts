import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguroActualComponent } from './seguro-actual.component';

describe('SeguroActualComponent', () => {
  let component: SeguroActualComponent;
  let fixture: ComponentFixture<SeguroActualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguroActualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguroActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
