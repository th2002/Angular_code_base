import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsCrudComponent } from './posts-crud.component';

describe('PostsCrudComponent', () => {
  let component: PostsCrudComponent;
  let fixture: ComponentFixture<PostsCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsCrudComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PostsCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
