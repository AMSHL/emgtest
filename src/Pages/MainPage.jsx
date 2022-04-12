import React, { useCallback } from "react";
import { ref, getDatabase } from 'firebase/database';
import { useList } from 'react-firebase-hooks/database';

import {firebaseApp, writeUserData} from '../firebase';
import { EXAMPLE_USER_ID } from '../config';

/**
 * Project main page
 *
 * @returns page component
 */
export const MainPage = () =>{
  const user = EXAMPLE_USER_ID;
  const database = getDatabase(firebaseApp);
  const [snapshots, loading, error] = useList(ref(database, 'users'));

  const onInputChange = useCallback((value)=>{
    writeUserData(user, value);
  }
  , []);

  return(
  <>
    <span className="form-title">
      EMG Soft test task
    </span>
    <div className="wrap-container">
      <textarea
        className="input-field"
        placeholder="Your Message"
        value={loading ? 'Loading...' : snapshots[user]?.val()?.message || ''}
        disabled={loading}
        onChange={(e) => onInputChange(e.target.value)}
      />
    </div>
    <div>
      <p>
        {error && <strong>Error: {error}</strong>}
      </p>
    </div>
  </>
  );
};
