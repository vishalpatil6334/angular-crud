import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditstudentDialogComponent } from './editstudent-dialog.component';

describe('EditstudentDialogComponent', () => {
  let component: EditstudentDialogComponent;
  let fixture: ComponentFixture<EditstudentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditstudentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditstudentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
