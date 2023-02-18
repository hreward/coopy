import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoopDetailsComponent } from './coop-details.component';

describe('CoopDetailsComponent', () => {
  let component: CoopDetailsComponent;
  let fixture: ComponentFixture<CoopDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoopDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoopDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
