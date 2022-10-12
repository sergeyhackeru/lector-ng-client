import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectorsListComponent } from './lectors-list.component';

describe('LectorsListComponent', () => {
  let component: LectorsListComponent;
  let fixture: ComponentFixture<LectorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectorsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LectorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
