import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContienenteContenidoComponent } from './contienente-contenido.component';

describe('ContienenteContenidoComponent', () => {
  let component: ContienenteContenidoComponent;
  let fixture: ComponentFixture<ContienenteContenidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContienenteContenidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContienenteContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
