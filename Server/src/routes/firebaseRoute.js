import {Router} from 'express';
import sendFirebaseNotification from '../controllers/firebaseController.js'

const notificationRoute=Router();

notificationRoute.post('/send-notification',sendFirebaseNotification)

export default notificationRoute;