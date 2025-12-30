import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemePreviewCard } from './theme-preview-card';

describe('ThemePreviewCard', () => {
  let component: ThemePreviewCard;
  let fixture: ComponentFixture<ThemePreviewCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemePreviewCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemePreviewCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
