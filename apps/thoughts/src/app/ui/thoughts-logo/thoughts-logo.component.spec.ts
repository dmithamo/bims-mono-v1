import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThoughtsLogoComponent } from './thoughts-logo.component';

describe('ThoughtsLogoComponent', () => {
  let component: ThoughtsLogoComponent;
  let fixture: ComponentFixture<ThoughtsLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThoughtsLogoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThoughtsLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
