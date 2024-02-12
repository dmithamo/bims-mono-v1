import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BimsAuthComponent } from './bims-auth.component';

describe('BimsAuthComponent', () => {
  let component: BimsAuthComponent;
  let fixture: ComponentFixture<BimsAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BimsAuthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BimsAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
