import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdLibComponent } from './third-lib.component';

describe('ThirdLibComponent', () => {
  let component: ThirdLibComponent;
  let fixture: ComponentFixture<ThirdLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
