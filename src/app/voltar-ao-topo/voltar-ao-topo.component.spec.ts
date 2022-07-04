import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoltarAoTopoComponent } from './voltar-ao-topo.component';

describe('VoltarAoTopoComponent', () => {
  let component: VoltarAoTopoComponent;
  let fixture: ComponentFixture<VoltarAoTopoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoltarAoTopoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoltarAoTopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
