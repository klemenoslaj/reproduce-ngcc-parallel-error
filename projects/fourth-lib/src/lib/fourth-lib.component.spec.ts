import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthLibComponent } from './fourth-lib.component';

describe('FourthLibComponent', () => {
  let component: FourthLibComponent;
  let fixture: ComponentFixture<FourthLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
