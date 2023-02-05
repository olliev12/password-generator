import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordStrengthTestComponent } from './password-strength-test.component';

describe('PasswordStrengthTestComponent', () => {
  let component: PasswordStrengthTestComponent;
  let fixture: ComponentFixture<PasswordStrengthTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordStrengthTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordStrengthTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
