import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbDbmsComponent } from './db-dbms.component';

describe('DbDbmsComponent', () => {
  let component: DbDbmsComponent;
  let fixture: ComponentFixture<DbDbmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbDbmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbDbmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
