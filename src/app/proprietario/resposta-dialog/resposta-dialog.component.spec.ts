import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespostaDialogComponent } from './resposta-dialog.component';

describe('RespostaDialogComponent', () => {
  let component: RespostaDialogComponent;
  let fixture: ComponentFixture<RespostaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespostaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespostaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
