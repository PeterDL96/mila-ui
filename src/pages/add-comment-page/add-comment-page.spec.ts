import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddCommentPage } from './add-comment-page';

describe('AddCommentPage', () => {
  let component: AddCommentPage;
  let fixture: ComponentFixture<AddCommentPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCommentPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AddCommentPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
