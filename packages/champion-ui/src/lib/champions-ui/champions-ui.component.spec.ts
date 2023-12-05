import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChampionsUiComponent } from './champions-ui.component';

describe('ChampionsUiComponent', () => {
  let component: ChampionsUiComponent;
  let fixture: ComponentFixture<ChampionsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampionsUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChampionsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
