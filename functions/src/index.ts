import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

//nachricht von Can

//
// ==== Fertigi grundsätzlichi Cloud Funktion ====
// ZUM TESTE: Dokumänt erstelle in 'Nachrichten/Schulen/FMS/' mit 4 Wärt.
// 0 = String(klasse) | 1 = String(zeit) | 2 = String(grund) | 3 = String(raum)
//
//TODO: für alli schuele + Targets ahpasse
//

// FUNKTION PUSH TO FIREBASE: sudo firebase deploy --only functions


//const db = admin.firestore();
const fcm = admin.messaging();

export const sendToTopic = functions.firestore
    //check wenn e neue itrag created wird => onCreate .. evtl uf onUpdate wächsle
    .document('Nachrichten/Schulen/FMS/{DocumentID}').onCreate(async snapshot => {
        //nimmt dr snapshot usenander
        const data = snapshot.data() ?? [''];
        const klasse = data[0] ?? '';
        const zeit = data[1] ?? '';
        const grund = data[2] ?? '';
        const raum = data[3] ?? '';
        //payload = funktion für nochricht an user mit entsprächende wärt
        const payload: admin.messaging.MessagingPayload = {
            notification: {
                title: 'Neuer Aufall!',
                body: klasse + '\n' + zeit + '\n' + grund + '\n' + raum, //kombiniert werte mit \n, sprich neuer zeile
                clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                badge: '999999' //nachrichten badge
            }

        };
        
        return fcm.sendToTopic('FMS-3C', payload)
    })






