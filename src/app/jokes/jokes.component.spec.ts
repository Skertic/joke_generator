import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { JokeModel } from 'src/models';
import { JokesService } from 'src/services/jokes.service';
import { JokesComponent } from './jokes.component';

describe('JokesComponent', () => {
  let component: JokesComponent;
  let fixture: ComponentFixture<JokesComponent>;
  let jokesService: JokesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokesComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ JokesService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesComponent);
    component = fixture.componentInstance;
    jokesService = TestBed.inject(JokesService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get a joke on init', () => {
    const joke: JokeModel = {
      id: 1,
      type: 'general',
      setup: 'Why did the chicken cross the road?',
      punchline: 'To get to the other side.'
    };
    const getJokeSpy = spyOn(jokesService, 'getJoke').and.returnValue(of(joke));
    component.ngOnInit();
    expect(getJokeSpy).toHaveBeenCalled();
    expect(component.joke).toEqual(joke);
    expect(component.isRequesting).toBe(false);
  });

  it('should get a new joke on click', () => {
    const joke1: JokeModel = {
      id: 1,
      type: 'general',
      setup: 'Why did the chicken cross the road?',
      punchline: 'To get to the other side.'
    };
    const joke2: JokeModel = {
      id: 2,
      type: 'general',
      setup: 'What do you call a fake noodle?',
      punchline: 'An impasta.'
    };
    const getJokeSpy = spyOn(jokesService, 'getJoke').and.returnValues(of(joke1), of(joke2));
    component.onClickNewJoke();
    expect(getJokeSpy).toHaveBeenCalledTimes(1);
    expect(component.joke).toEqual(joke1);
    component.onClickNewJoke();
    expect(getJokeSpy).toHaveBeenCalledTimes(2);
    expect(component.joke).toEqual(joke2);
    expect(component.isRequesting).toBe(false);
  });

  afterEach(() => {
    fixture.destroy();
  });
});
