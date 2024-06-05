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

  it('should instantiate the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const appInstance = fixture.componentInstance;
    expect(appInstance).toBeTruthy();
  });

  it(`should have the title 'udacity-project-3'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const appInstance = fixture.componentInstance;
    expect(appInstance.title).toEqual('udacity-project-3');
  });

  it('should display the title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiledElement = fixture.nativeElement as HTMLElement;
    expect(
      compiledElement.querySelector('.content span')?.textContent
    ).toContain('udacity-project-3 app is running!');
  });
});
