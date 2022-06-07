import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodeListComponent } from './tode-list.component';

describe('TodeListComponent', () => {
  let component: TodeListComponent;
  let fixture: ComponentFixture<TodeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
