import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlugarDialogComponent } from './alugar-dialog.component';

describe('AlugarDialogComponent', () => {
  let component: AlugarDialogComponent;
  let fixture: ComponentFixture<AlugarDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlugarDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlugarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
