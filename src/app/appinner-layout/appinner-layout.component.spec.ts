import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppinnerLayoutComponent } from './appinner-layout.component';

describe('AppinnerLayoutComponent', () => {
  let component: AppinnerLayoutComponent;
  let fixture: ComponentFixture<AppinnerLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppinnerLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppinnerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
