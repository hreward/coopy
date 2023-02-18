import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecoopComponent } from './createcoop.component';

describe('CreatecoopComponent', () => {
  let component: CreatecoopComponent;
  let fixture: ComponentFixture<CreatecoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecoopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatecoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
