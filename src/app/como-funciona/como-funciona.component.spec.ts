import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoFuncionaComponent } from './como-funciona.component';

describe('ComoFuncionaComponent', () => {
  let component: ComoFuncionaComponent;
  let fixture: ComponentFixture<ComoFuncionaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComoFuncionaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoFuncionaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
