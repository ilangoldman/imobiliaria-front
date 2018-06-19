import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamacaoDialogComponent } from './reclamacao-dialog.component';

describe('ReclamacaoDialogComponent', () => {
  let component: ReclamacaoDialogComponent;
  let fixture: ComponentFixture<ReclamacaoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamacaoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamacaoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
