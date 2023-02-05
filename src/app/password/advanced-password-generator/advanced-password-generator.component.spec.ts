import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedPasswordGeneratorComponent } from './advanced-password-generator.component';

describe('AdvancedPasswordGeneratorComponent', () => {
  let component: AdvancedPasswordGeneratorComponent;
  let fixture: ComponentFixture<AdvancedPasswordGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedPasswordGeneratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedPasswordGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
