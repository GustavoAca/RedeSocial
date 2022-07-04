import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaspostagensComponent } from './minhaspostagens.component';

describe('MinhaspostagensComponent', () => {
  let component: MinhaspostagensComponent;
  let fixture: ComponentFixture<MinhaspostagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinhaspostagensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaspostagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
