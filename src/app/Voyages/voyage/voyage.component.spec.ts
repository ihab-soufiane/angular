import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageComponent } from './voyage.component';

describe('VoyageComponent', () => {
  let component: VoyageComponent;
  let fixture: ComponentFixture<VoyageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoyageComponent]
    });
    fixture = TestBed.createComponent(VoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
