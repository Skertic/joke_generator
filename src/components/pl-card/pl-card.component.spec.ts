import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlCardComponent } from './pl-card.component';

describe('PlCardComponent', () => {
  let component: PlCardComponent;
  let fixture: ComponentFixture<PlCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
