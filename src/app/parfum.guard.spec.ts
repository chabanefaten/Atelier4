import { TestBed } from '@angular/core/testing';
import { ParfumGuard } from './parfum.guard';



describe('ParfumtGuard', () => {
  let guard: ParfumGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ParfumGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});