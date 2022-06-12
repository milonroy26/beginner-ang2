import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbutMeComponent } from './abut-me.component';

describe('AbutMeComponent', () => {
  let component: AbutMeComponent;
  let fixture: ComponentFixture<AbutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbutMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
