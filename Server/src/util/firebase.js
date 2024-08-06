import admin from 'firebase-admin';
import serviceAccount from './firebaseAdminSDK.js';

// Initialize the Firebase admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
