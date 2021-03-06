import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionDetailComponent } from './definition-detail.component';

describe('DefinitionDetailComponent', () => {
  let component: DefinitionDetailComponent;
  let fixture: ComponentFixture<DefinitionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinitionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
