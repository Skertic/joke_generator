import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JokeModel } from 'src/models';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  public getJoke(): Observable<JokeModel> {
    return this.http.get<JokeModel>(environment.jokesApi);
  }
}
