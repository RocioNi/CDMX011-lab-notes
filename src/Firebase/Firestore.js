/* eslint-disable import/prefer-default-export */
import { db } from './FirebaseAuth';

export const creatingNotes = (title, text) => db.collection('allNotes').doc().set({
  title,
  text,
  // Date,
});

export const allData = db.collection('allNotes');

// export const allData = db.collection('allNotes').orderBy('dateHour', 'desc').get();
