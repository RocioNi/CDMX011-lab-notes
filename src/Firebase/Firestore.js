/* eslint-disable import/prefer-default-export */
import { db } from './FirebaseAuth';

export const creatingNotes = (title, text) => db.collection('allNotes').doc().set({
  title,
  text,
});

export const allData = db.collection('allNotes').get();
