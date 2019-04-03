import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbfundamentalsComponent } from './dbfundamentals.component';

describe('DbfundamentalsComponent', () => {
  let component: DbfundamentalsComponent;
  let fixture: ComponentFixture<DbfundamentalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbfundamentalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbfundamentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
