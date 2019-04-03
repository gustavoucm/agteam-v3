import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbArquitectureComponent } from './db-arquitecture.component';

describe('DbArquitectureComponent', () => {
  let component: DbArquitectureComponent;
  let fixture: ComponentFixture<DbArquitectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbArquitectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbArquitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
