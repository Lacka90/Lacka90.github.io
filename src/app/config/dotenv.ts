import * as loadedDotenv from '!val-loader!./dotenv-loader';

export interface IDotenv {
  firebase: {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
  };
}

export const dotenv = loadedDotenv as IDotenv;
