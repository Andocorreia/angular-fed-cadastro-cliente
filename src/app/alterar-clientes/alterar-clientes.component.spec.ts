import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarClientesComponent } from './alterar-clientes.component';

describe('AlterarClientesComponent', () => {
  let component: AlterarClientesComponent;
  let fixture: ComponentFixture<AlterarClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlterarClientesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlterarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
