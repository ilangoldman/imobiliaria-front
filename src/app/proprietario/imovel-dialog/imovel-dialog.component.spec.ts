import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImovelDialogComponent } from './imovel-dialog.component';

describe('ImovelDialogComponent', () => {
  let component: ImovelDialogComponent;
  let fixture: ComponentFixture<ImovelDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImovelDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImovelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
