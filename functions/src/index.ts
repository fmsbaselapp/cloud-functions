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

const Schulen = ['FMS',
    'Gymnasium am Münsterplatz',
    'Gymnasium Bäumlihof',
    'Gymnasium Kirschgarten',
    'Gymnasium Leonhard',
    'WG und WMS',
    'Sekundar Bäumlihof',
    'Sekundar De Wette',
    'Sekundar Drei Linden',
    'Sekundar Holbein',
    'Sekundar Leonhard',
    'Sekundar Sandgruben',
    'Sekundar St. Alban',
    'Sekundar Theobald Baerwart',
    'Sekundar Vogesen',
    'Sekundar Wasgenring',
    'St. Johann',
    'Thierstein',
    'Dreirosen',
    'Isaak Iselin',
    'Kleinhüningen',
    'Fachzentrum Gestalten',
    'Tagesstrukturen Drei Linden',
    'ZBA Gundeldingen',
    'ZBA Letzi',
    'BFS Gebäude A',
    'BFS Gebäude B',
    'BFS Gebäude C',
    'BFS Gebäude D',
    'PZ.BS Bibliothek',
    'PZ.BS medialab',]


export const sendToTopic = functions.firestore
    //check wenn e neue itrag created wird => onCreate .. evtl uf onUpdate wächsle
    .document('Nachrichten/Schulen/' + Schulen[1].replace(/\s/g, '') + '/{DocumentID}').onCreate(async snapshot => {
        //Shorten School (remove whitespace for target)
        const schuleShort = Schulen[0].replace(/\s/g, '');

        //nimmt dr snapshot usenander
        const data = snapshot.data() ?? [''];
        const klasse = data['klasse'] ?? '';
        const zeit = data['zeit'] ?? '';
        const grund = data['grund'] ?? '';
        const raum = data['raum'] ?? '';
        //payload = funktion für nochricht an user mit entsprächende wärt
        const payload: admin.messaging.MessagingPayload = {
            notification: {
                title: 'Neuer Aufall!',
                body: klasse + '\n' + zeit + '\n' + grund + '\n' + raum, //kombiniert werte mit \n, sprich neuer zeile
                clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                badge: '1' //nachrichten badge
            }

        };

        return fcm.sendToTopic(schuleShort + '-' + klasse, payload)
    })

//============================================================================================================================

export const sendToTopic1 = functions.firestore
    //check wenn e neue itrag created wird => onCreate .. evtl uf onUpdate wächsle
    .document('Nachrichten/Schulen/' + Schulen[1].replace(/\s/g, '') + '/{DocumentID}').onCreate(async snapshot => {
        //Shorten School (remove whitespace for target)
        const schuleShort = Schulen[1].replace(/\s/g, '');

        //nimmt dr snapshot usenander
        const data = snapshot.data() ?? [''];
        const klasse = data['klasse'] ?? '';
        const zeit = data['zeit'] ?? '';
        const grund = data['grund'] ?? '';
        const raum = data['raum'] ?? '';
        //payload = funktion für nochricht an user mit entsprächende wärt
        const payload: admin.messaging.MessagingPayload = {
            notification: {
                title: 'Neuer Aufall!',
                body: klasse + '\n' + zeit + '\n' + grund + '\n' + raum, //kombiniert werte mit \n, sprich neuer zeile
                clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                badge: '1' //nachrichten badge
            }

        };

        return fcm.sendToTopic(schuleShort + '-' + klasse, payload)
    })

/*
export const gymnasiumAmMünsterplatz = functions.firestore
    .document('Nachrichten/Schulen/'+Schulen[1]+'/{DocumentID}').onCreate(async snapshot => {
        const schuleShort = Schulen[1].replace(/\s/g, '');
        const data = snapshot.data() ?? [''];
        const klasse = data['klasse'] ?? '';
        const zeit = data['zeit'] ?? '';
        const grund = data['grund'] ?? '';
        const raum = data['raum'] ?? '';
       
        const payload: admin.messaging.MessagingPayload = {
            notification: {
                title: 'Neuer Aufall!',
                body: klasse + '\n' + zeit + '\n' + grund + '\n' + raum, 
                clickAction: 'FLUTTER_NOTIFICATION_CLICK', 
                badge: '1' 
            }
        };
        return fcm.sendToTopic(schuleShort + '-' + klasse, payload)
    })
    */