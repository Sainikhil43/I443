import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipackagesComponent } from './multipackages.component';

describe('MultipackagesComponent', () => {
  let component: MultipackagesComponent;
  let fixture: ComponentFixture<MultipackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
