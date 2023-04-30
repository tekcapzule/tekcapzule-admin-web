import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCapsuleComponent } from './create-capsule.component';

describe('AdminCreateCapsuleComponent', () => {
  let component: CreateCapsuleComponent;
  let fixture: ComponentFixture<CreateCapsuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateCapsuleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCapsuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
