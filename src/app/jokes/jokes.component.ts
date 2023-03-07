import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { JokeModel } from 'src/models';
import { JokesService } from 'src/services/jokes.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit, OnDestroy {
  private getJokeSubscription!: Subscription;
  public joke!: JokeModel;
  public isRequesting = false;

  constructor(
    private readonly jokesService: JokesService,
  ) {
  }

  ngOnInit(): void {
    this.getJoke();
  }

  ngOnDestroy(): void {
    if (this.getJokeSubscription) {
      this.getJokeSubscription.unsubscribe(); // prevent memory leaks
    }
  }

  private getJoke(): void {
    this.isRequesting = true;
    this.getJokeSubscription = this.jokesService.getJoke().subscribe((response: JokeModel) => {
      this.joke = response;
      this.isRequesting = false;
    });
  }

  public onClickNewJoke(): void {
    this.getJoke();
  }

}
