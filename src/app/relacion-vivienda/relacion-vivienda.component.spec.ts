import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionViviendaComponent } from './relacion-vivienda.component';

describe('RelacionViviendaComponent', () => {
  let component: RelacionViviendaComponent;
  let fixture: ComponentFixture<RelacionViviendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelacionViviendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelacionViviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
