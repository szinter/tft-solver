import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChapionTraitUiComponent } from './chapion-trait-ui.component';

describe('ChapionTraitUiComponent', () => {
  let component: ChapionTraitUiComponent;
  let fixture: ComponentFixture<ChapionTraitUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChapionTraitUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChapionTraitUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
