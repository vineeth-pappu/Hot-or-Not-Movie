import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { UpdateMovieVotes } from 'src/app/store/movies/movie.action';

@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.sass']
})
export class MovieContainerComponent implements OnInit {

  @Input() movie: Movie;
  @Input() movieIndex: number;

  @Output() getMovieToCompare: EventEmitter<any> = new EventEmitter();

  posterUrl = environment.posterUrl;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }


  vote(): void {
    const votes = this.movie.vote_count + 1;

    this.store.dispatch(new UpdateMovieVotes({ movieIndex: this.movieIndex, votes }));

    this.getMovieToCompare.emit();
  }


}
