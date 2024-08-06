import admin from '../util/firebase.js';

class Notification{
    static async sendNotification(deviceToken,title,body){
        const message={
            notification:{
               title,body
            },
            token:deviceToken
        }
        try{
            const response=await admin.messaging().send(message);
            return response;

        }
        catch(err){
            throw err;
        }

    }
}
export default Notification;