import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptchaSelectionComponent } from './captcha-selection.component';

describe('CaptchaSelectionComponent', () => {
  let component: CaptchaSelectionComponent;
  let fixture: ComponentFixture<CaptchaSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptchaSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptchaSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
