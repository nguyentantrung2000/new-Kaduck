import { question_kit } from './../models/question_kit.model';
import { QuestionKitService } from './../services/question-kit.service';
import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { map, switchMap, of, catchError } from 'rxjs';
import * as QuestionKitActions from 'src/app/action/question_kit.action';

@Injectable()
export class QuestionKitEffects {
  constructor(
    private questionKitService: QuestionKitService,
    private actions$: Actions
  ) { }

  // getQuestionKitByOnwer$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(QuestionKitActions.getQuestionKitByOwner),
  //     switchMap((action) =>

  //       this.questionKitService.getQuestionKitByOwner(action.id).pipe(
  //         map((question_kit) => {
  //           console.log(question_kit);
  //           return QuestionKitActions.getQuestionKitByOwnerSuccess({
  //             question_kit: question_kit,
  //           });
  //         }),
  //         catchError((error) =>
  //           of(QuestionKitActions.getQuestionKitByOwnerFailure({ error: error }))
  //         )
  //       )
  //     )
  //   )
  // );

  getQuestionKitByOnwer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuestionKitActions.getQuestionKitByOwner),
      switchMap((action) =>
        this.questionKitService.getQuestionKitByOwner(action.id).pipe(
          map((question_kit) => {
            console.log(question_kit);
            return QuestionKitActions.getQuestionKitByOwnerSuccess({
              question_kit: question_kit,
            });
          }),
          catchError((error) =>
            of(QuestionKitActions.getQuestionKitByOwnerFailure({ error: error }))
          )))));



  getQuestionKits$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuestionKitActions.getQuestionKits),
      switchMap(() =>
        this.questionKitService.getQuestionKits().pipe(
          map((question_kits) => {
            return QuestionKitActions.getQuestionKitsSuccess({
              question_kits: question_kits,
            });
          }),
          catchError((error) =>
            of(QuestionKitActions.getQuestionKitsFailure({ error: error }))
          )
        )
      )
    )
  );

  getQuestionKit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuestionKitActions.getQuestionKit),
      switchMap((action) =>
        this.questionKitService.getQuestionKit(action.id).pipe(
          map((question_kit) => {
            return QuestionKitActions.getQuestionKitSuccess({
              question_kit: question_kit,
            });
          }),
          catchError((error) =>
            of(QuestionKitActions.getQuestionKitFailure({ error: error }))
          )
        )
      )
    )
  );



  postQuestionKit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuestionKitActions.postQuestionKit),
      switchMap((action) =>
        this.questionKitService.postQuestionKit(action.question_kit).pipe(
          map((question_kit) => {
            return QuestionKitActions.postQuestionKitSuccess({
              question_kit: question_kit,
            });
          }),
          catchError((error) =>
            of(QuestionKitActions.postQuestionKitFailure({ error: error }))
          )
        )
      )
    )
  );

  updateQuestionKit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuestionKitActions.updateQuestionKit),
      switchMap((action) =>
        this.questionKitService
          .updateQuestionKit(action.id, action.question_kit)
          .pipe(
            map((question_kit) => {
              return QuestionKitActions.updateQuestionKitSuccess({
                question_kit: question_kit,
              });
            }),
            catchError((error) =>
              of(QuestionKitActions.updateQuestionKitFailure({ error: error }))
            )
          )
      )
    )
  );
}
