import Notification from "../service/notificationService.js";

const sendFirebaseNotification=async(req,res)=>{
    try{
        const {title,body,deviceToken}=req.body;
        await Notification.sendNotification(deviceToken,title,body);
        res.status(200).json({message:"Notification sent successfully",success:true})
    }
    catch(error){
        res.status(500).json({message:"Error sending the notification",success:false,error})
    }
}

export default sendFirebaseNotification;