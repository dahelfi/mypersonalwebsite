import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MystorySectionComponent } from './mystory-section.component';

describe('MystorySectionComponent', () => {
  let component: MystorySectionComponent;
  let fixture: ComponentFixture<MystorySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MystorySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MystorySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
