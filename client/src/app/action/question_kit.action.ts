import { question_kit } from './../models/question_kit.model';
import { createAction, props } from '@ngrx/store';


// Get Question by Owner
export const getQuestionKitByOwner = createAction('[QuestionKit] getQuestionKits', props<{ id: string | undefined }>());

export const getQuestionKitByOwnerSuccess = createAction(
  '[QuestionKit] getQuestionKitsSuccess',
  props<{ question_kit: question_kit }>()
);

export const getQuestionKitByOwnerFailure = createAction(
  '[QuestionKit] getQuestionKitsFailure',
  props<{ error: string }>()
);


// Get QuestionKits
export const getQuestionKits = createAction('[QuestionKit] getQuestionKits');

export const getQuestionKitsSuccess = createAction(
  '[QuestionKit] getQuestionKitsSuccess',
  props<{ question_kits: question_kit[] }>()
);

export const getQuestionKitsFailure = createAction(
  '[QuestionKit] getQuestionKitsFailure',
  props<{ error: string }>()
);

// Get QuestionKit
export const getQuestionKit = createAction(
  '[QuestionKit] getQuestionKit',
  props<{ id: string }>()
);
export const getQuestionKitSuccess = createAction(
  '[QuestionKit] getQuestionKitSuccess',
  props<{ question_kit: question_kit }>()
);
export const getQuestionKitFailure = createAction(
  '[QuestionKit] getQuestionKitFailure',
  props<{ error: string }>()
);




// Post QuestionKit
export const postQuestionKit = createAction(
  '[QuestionKit] postQuestionKit',
  props<{ question_kit: question_kit }>()
);
export const postQuestionKitSuccess = createAction(
  '[QuestionKit] postQuestionKitSuccess',
  props<{ question_kit: question_kit }>()
);
export const postQuestionKitFailure = createAction(
  '[QuestionKit] postQuestionKitFailure',
  props<{ error: string }>()
);

// Update QuestionKit
export const updateQuestionKit = createAction(
  '[QuestionKit] updateQuestionKit',
  props<{ id: string; question_kit: question_kit }>()
);
export const updateQuestionKitSuccess = createAction(
  '[QuestionKit] updateQuestionKitSuccess',
  props<{ question_kit: question_kit }>()
);
export const updateQuestionKitFailure = createAction(
  '[QuestionKit] updateQuestionKitFailure',
  props<{ error: string }>()
);
