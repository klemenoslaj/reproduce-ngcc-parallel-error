import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthLibComponent } from './fifth-lib.component';

describe('FifthLibComponent', () => {
  let component: FifthLibComponent;
  let fixture: ComponentFixture<FifthLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
