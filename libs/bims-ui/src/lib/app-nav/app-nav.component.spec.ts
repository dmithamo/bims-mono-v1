import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppBottomNavComponent } from './app-nav.component';

describe('AppBottomNavComponent', () => {
  let component: AppBottomNavComponent;
  let fixture: ComponentFixture<AppBottomNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppBottomNavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppBottomNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
