import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutMethodComponent } from './put-method.component';

describe('PutMethodComponent', () => {
  let component: PutMethodComponent;
  let fixture: ComponentFixture<PutMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutMethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
