import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtiuserComponent } from './edtiuser.component';

describe('EdtiuserComponent', () => {
  let component: EdtiuserComponent;
  let fixture: ComponentFixture<EdtiuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdtiuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdtiuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
