import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbModelsComponent } from './db-models.component';

describe('DbModelsComponent', () => {
  let component: DbModelsComponent;
  let fixture: ComponentFixture<DbModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
