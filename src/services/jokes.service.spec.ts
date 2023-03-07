import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { JokesService } from './jokes.service';
import { JokeModel } from 'src/models';

describe('JokesService', () => {
  let service: JokesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [JokesService]
    });

    service = TestBed.inject(JokesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the jokes API and return a joke', () => {
    const joke: JokeModel = { id: 1, punchline: '', setup: '', type: '' };
  
    service.getJoke().subscribe((response) => {
      expect(response).toEqual(joke);
    });
  
    const req = httpMock.expectOne('https://official-joke-api.appspot.com/random_joke');
    expect(req.request.method).toEqual('GET');
  
    req.flush(joke);
  });  
});
