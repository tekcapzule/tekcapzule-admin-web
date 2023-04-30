import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTekByteComponent } from './create-tekbyte.component';

describe('AdminCreateTopicComponent', () => {
  let component: CreateTekByteComponent;
  let fixture: ComponentFixture<CreateTekByteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateTekByteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTekByteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
