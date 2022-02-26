import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBoxesComponent } from './create-boxes.component';

describe('CreateBoxesComponent', () => {
  let component: CreateBoxesComponent;
  let fixture: ComponentFixture<CreateBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBoxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
