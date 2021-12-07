/* eslint-disable import/prefer-default-export */
import { db } from './FirebaseAuth';

const creatingNotes = (title, text) => db.collection('allNotes').doc().set({
  title,
  text,
  date: new Date(),
});

const allData = db.collection('allNotes');

// export const allData = db.collection('allNotes').orderBy('dateHour', 'desc').get();
export { creatingNotes, allData };
