import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the application instance', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const appInstance = fixture.componentInstance;
    expect(appInstance).toBeDefined();
  });

  it('should have a title property with value "udacity-project-3"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const appInstance = fixture.componentInstance;
    expect(appInstance.title).toBe('udacity-project-3');
  });

  it('should render the title in a span element', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiledElement = fixture.nativeElement as HTMLElement;
    expect(
      compiledElement.querySelector('.content span')?.textContent
    ).toContain('udacity-project-3 app is running!');
  });
});
