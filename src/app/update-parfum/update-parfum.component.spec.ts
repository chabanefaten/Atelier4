import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateParfumComponent } from './update-parfum.component';

describe('UpdateParfumComponent', () => {
  let component: UpdateParfumComponent;
  let fixture: ComponentFixture<UpdateParfumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateParfumComponent]
    });
    fixture = TestBed.createComponent(UpdateParfumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
