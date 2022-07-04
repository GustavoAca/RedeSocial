import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoAcoesComponent } from './botao-acoes.component';

describe('BotaoAcoesComponent', () => {
  let component: BotaoAcoesComponent;
  let fixture: ComponentFixture<BotaoAcoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoAcoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoAcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
