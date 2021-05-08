
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as BookAction from '../state/books.actions';

@Injectable()
export class BookEffects {
  constructor(private http: HttpClient, private action$: Actions) {}

  private ApiURL: string = 'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks';

  GetToDos$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(BookAction.BeginGetBookAction),
      mergeMap(() =>
        this.http.get(this.ApiURL).pipe(
          map((data: any) => {
              const res = data && data.items ? data.items : [];
            return BookAction.retrievedBookList({ Book: res });
          }),
          catchError((error: Error) => {
            return of(BookAction.ErrorBookAction(error));
          })
        )
      )
    )
  );
}