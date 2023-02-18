import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyPasswordChangeComponent } from './verify-password-change.component';

describe('VerifyPasswordChangeComponent', () => {
  let component: VerifyPasswordChangeComponent;
  let fixture: ComponentFixture<VerifyPasswordChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyPasswordChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyPasswordChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
