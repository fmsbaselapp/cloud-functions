import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

//const db = admin.firestore();
const fcm = admin.messaging();

export const sendToTopic = functions.firestore
    //check wenn e neue itrag created wird
    .document('Nachrichten/Schulen/FMS/{KlasseID}').onCreate(async snapshot => {

        const ausfall = snapshot.data();

        const payload: admin.messaging.MessagingPayload = {
            notification: {
                title: 'Neuer Aufall!',
                body: String(ausfall), //get first element of JSON String
                clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                badge: '999999'
            }

        };
        return fcm.sendToTopic('FMS-3C', payload)
    })









// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
