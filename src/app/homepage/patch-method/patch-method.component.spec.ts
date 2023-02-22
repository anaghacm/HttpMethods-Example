import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchMethodComponent } from './patch-method.component';

describe('PatchMethodComponent', () => {
  let component: PatchMethodComponent;
  let fixture: ComponentFixture<PatchMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatchMethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatchMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
