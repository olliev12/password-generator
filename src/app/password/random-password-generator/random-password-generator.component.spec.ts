import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPasswordGeneratorComponent } from './random-password-generator.component';

describe('RandomPasswordGeneratorComponent', () => {
  let component: RandomPasswordGeneratorComponent;
  let fixture: ComponentFixture<RandomPasswordGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomPasswordGeneratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomPasswordGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
