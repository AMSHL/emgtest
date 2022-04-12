import { initializeApp } from 'firebase/app';
import { ref, getDatabase, set } from 'firebase/database';

import { FIREBASE_CONFIG } from './config';

/**
 * Fire base init function
 * @param {object} config 
 * @returns void
 */
export const firebaseApp = initializeApp(FIREBASE_CONFIG);

/**
 * Write to DB functions
 * @param {number} userId 
 * @param {string} message 
 * @returns void
 */
export const writeUserData = (userId, message) => {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    message,
  });
};
