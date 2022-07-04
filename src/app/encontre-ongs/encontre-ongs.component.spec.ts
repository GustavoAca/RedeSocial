import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncontreOngsComponent } from './encontre-ongs.component';

describe('EncontreOngsComponent', () => {
  let component: EncontreOngsComponent;
  let fixture: ComponentFixture<EncontreOngsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncontreOngsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncontreOngsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
