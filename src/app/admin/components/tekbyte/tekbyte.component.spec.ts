import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TekByteComponent } from './tekbyte.component';

describe('TekByteComponent', () => {
  let component: TekByteComponent;
  let fixture: ComponentFixture<TekByteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TekByteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TekByteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
