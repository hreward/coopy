import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InCoopsComponent } from './in-coops.component';

describe('InCoopsComponent', () => {
  let component: InCoopsComponent;
  let fixture: ComponentFixture<InCoopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InCoopsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InCoopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
