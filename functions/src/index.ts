import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

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

//alle schulen
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



//============================================================================================================================

export const fms = functions.firestore
    //check wenn e neue itrag created wird => onCreate .. evtl uf onUpdate wächsle
    .document('Nachrichten/Schulen/'+ Schulen[0].replace(/\s/g, '')+'/{DocumentID}').onCreate(async snapshot => {
            
        //nimmt dr snapshot usenander
         const data = snapshot.data() ?? [''];
         const target = data['target'] ?? [''];
         const tag = data['tag'] ?? [''];
         const klasse = data['klasse'] ?? [''];
         const grund = data['grund'] ?? [''];
         const raum = data['raum'] ?? [''];
         //-----------------------------------
         
 
         //payload = funktion für nochricht an user mit entsprächende wärt
         const payload: admin.messaging.MessagingPayload = {
             notification: {
                 title: tag,
                 body: klasse+ '\n'+ grund+'\n' + raum, //kombiniert werte mit \n, sprich neuer zeile
                 clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                 badge: '1' //nachrichten badge
             }
 
         };
 
         return fcm.sendToTopic(target, payload)
     })

//============================================================================================================================

export const gymMunsterplatz = functions.firestore
    //check wenn e neue itrag created wird => onCreate .. evtl uf onUpdate wächsle
    .document('Nachrichten/Schulen/' + Schulen[1].replace(/\s/g, '')+ '/{DocumentID}').onCreate(async snapshot => {
            
        //nimmt dr snapshot usenander
         const data = snapshot.data() ?? [''];
         const target = data['target'] ?? [''];
         const tag = data['tag'] ?? [''];
         const klasse = data['klasse'] ?? [''];
         const grund = data['grund'] ?? [''];
         const raum = data['raum'] ?? [''];
         //-----------------------------------
         
 
         //payload = funktion für nochricht an user mit entsprächende wärt
         const payload: admin.messaging.MessagingPayload = {
             notification: {
                 title: tag,
                 body: klasse+ '\n'+ grund+'\n' + raum, //kombiniert werte mit \n, sprich neuer zeile
                 clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                 badge: '1' //nachrichten badge
             }
 
         };
 
         return fcm.sendToTopic(target, payload)
     })

//============================================================================================================================

export const gymBaumlihof = functions.firestore
    //check wenn e neue itrag created wird => onCreate .. evtl uf onUpdate wächsle
    .document('Nachrichten/Schulen/' + Schulen[2].replace(/\s/g, '')+ '/{DocumentID}').onCreate(async snapshot => {
            
        //nimmt dr snapshot usenander
         const data = snapshot.data() ?? [''];
         const target = data['target'] ?? [''];
         const tag = data['tag'] ?? [''];
         const klasse = data['klasse'] ?? [''];
         const grund = data['grund'] ?? [''];
         const raum = data['raum'] ?? [''];
         //-----------------------------------
         
 
         //payload = funktion für nochricht an user mit entsprächende wärt
         const payload: admin.messaging.MessagingPayload = {
             notification: {
                 title: tag,
                 body: klasse+ '\n'+ grund+'\n' + raum, //kombiniert werte mit \n, sprich neuer zeile
                 clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                 badge: '1' //nachrichten badge
             }
 
         };
 
         return fcm.sendToTopic(target, payload)
     })

//============================================================================================================================

export const gymKirschgarten = functions.firestore
    //check wenn e neue itrag created wird => onCreate .. evtl uf onUpdate wächsle
    .document('Nachrichten/Schulen/' + Schulen[3].replace(/\s/g, '')+ '/{DocumentID}').onCreate(async snapshot => {
            
        //nimmt dr snapshot usenander
         const data = snapshot.data() ?? [''];
         const target = data['target'] ?? [''];
         const tag = data['tag'] ?? [''];
         const klasse = data['klasse'] ?? [''];
         const grund = data['grund'] ?? [''];
         const raum = data['raum'] ?? [''];
         //-----------------------------------
         
 
         //payload = funktion für nochricht an user mit entsprächende wärt
         const payload: admin.messaging.MessagingPayload = {
             notification: {
                 title: tag,
                 body: klasse+ '\n'+ grund+'\n' + raum, //kombiniert werte mit \n, sprich neuer zeile
                 clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                 badge: '1' //nachrichten badge
             }
 
         };
 
         return fcm.sendToTopic(target, payload)
     })

//============================================================================================================================

export const gymLeonhard = functions.firestore
    //check wenn e neue itrag created wird => onCreate .. evtl uf onUpdate wächsle
    .document('Nachrichten/Schulen/' + Schulen[4].replace(/\s/g, '')+ '/{DocumentID}').onCreate(async snapshot => {
            
        //nimmt dr snapshot usenander
         const data = snapshot.data() ?? [''];
         const target = data['target'] ?? [''];
         const tag = data['tag'] ?? [''];
         const klasse = data['klasse'] ?? [''];
         const grund = data['grund'] ?? [''];
         const raum = data['raum'] ?? [''];
         //-----------------------------------
         
 
         //payload = funktion für nochricht an user mit entsprächende wärt
         const payload: admin.messaging.MessagingPayload = {
             notification: {
                 title: tag,
                 body: klasse+ '\n'+ grund+'\n' + raum, //kombiniert werte mit \n, sprich neuer zeile
                 clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                 badge: '1' //nachrichten badge
             }
 
         };
 
         return fcm.sendToTopic(target, payload)
     })

//============================================================================================================================

export const wgWms = functions.firestore
    //check wenn e neue itrag created wird => onCreate .. evtl uf onUpdate wächsle
    .document('Nachrichten/Schulen/' + Schulen[5].replace(/\s/g, '')+ '/{DocumentID}').onCreate(async snapshot => {
            
        //nimmt dr snapshot usenander
         const data = snapshot.data() ?? [''];
         const target = data['target'] ?? [''];
         const tag = data['tag'] ?? [''];
         const klasse = data['klasse'] ?? [''];
         const grund = data['grund'] ?? [''];
         const raum = data['raum'] ?? [''];
         //-----------------------------------
         
 
         //payload = funktion für nochricht an user mit entsprächende wärt
         const payload: admin.messaging.MessagingPayload = {
             notification: {
                 title: tag,
                 body: klasse+ '\n'+ grund+'\n' + raum, //kombiniert werte mit \n, sprich neuer zeile
                 clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                 badge: '1' //nachrichten badge
             }
 
         };
 
         return fcm.sendToTopic(target, payload)
     })

//============================================================================================================================

export const sekBaumlihof = functions.firestore
    //check wenn e neue itrag created wird => onCreate .. evtl uf onUpdate wächsle
    .document('Nachrichten/Schulen/' + Schulen[6].replace(/\s/g, '')+ '/{DocumentID}').onCreate(async snapshot => {
            
        //nimmt dr snapshot usenander
         const data = snapshot.data() ?? [''];
         const target = data['target'] ?? [''];
         const tag = data['tag'] ?? [''];
         const klasse = data['klasse'] ?? [''];
         const grund = data['grund'] ?? [''];
         const raum = data['raum'] ?? [''];
         //-----------------------------------
         
 
         //payload = funktion für nochricht an user mit entsprächende wärt
         const payload: admin.messaging.MessagingPayload = {
             notification: {
                 title: tag,
                 body: klasse+ '\n'+ grund+'\n' + raum, //kombiniert werte mit \n, sprich neuer zeile
                 clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                 badge: '1' //nachrichten badge
             }
 
         };
 
         return fcm.sendToTopic(target, payload)
     })

//============================================================================================================================

export const sekDeWette = functions.firestore
    //check wenn e neue itrag created wird => onCreate .. evtl uf onUpdate wächsle
    .document('Nachrichten/Schulen/' + Schulen[7].replace(/\s/g, '')+ '/{DocumentID}').onCreate(async snapshot => {
            
        //nimmt dr snapshot usenander
         const data = snapshot.data() ?? [''];
         const target = data['target'] ?? [''];
         const tag = data['tag'] ?? [''];
         const klasse = data['klasse'] ?? [''];
         const grund = data['grund'] ?? [''];
         const raum = data['raum'] ?? [''];
         //-----------------------------------
         
 
         //payload = funktion für nochricht an user mit entsprächende wärt
         const payload: admin.messaging.MessagingPayload = {
             notification: {
                 title: tag,
                 body: klasse+ '\n'+ grund+'\n' + raum, //kombiniert werte mit \n, sprich neuer zeile
                 clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                 badge: '1' //nachrichten badge
             }
 
         };
 
         return fcm.sendToTopic(target, payload)
     })

//============================================================================================================================

export const sekDreiLinden = functions.firestore
    //check wenn e neue itrag created wird => onCreate .. evtl uf onUpdate wächsle
    .document('Nachrichten/Schulen/' + Schulen[8].replace(/\s/g, '')+ '/{DocumentID}').onCreate(async snapshot => {
            
        //nimmt dr snapshot usenander
         const data = snapshot.data() ?? [''];
         const target = data['target'] ?? [''];
         const tag = data['tag'] ?? [''];
         const klasse = data['klasse'] ?? [''];
         const grund = data['grund'] ?? [''];
         const raum = data['raum'] ?? [''];
         //-----------------------------------
         
 
         //payload = funktion für nochricht an user mit entsprächende wärt
         const payload: admin.messaging.MessagingPayload = {
             notification: {
                 title: tag,
                 body: klasse+ '\n'+ grund+'\n' + raum, //kombiniert werte mit \n, sprich neuer zeile
                 clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                 badge: '1' //nachrichten badge
             }
 
         };
 
         return fcm.sendToTopic(target, payload)
     })

//============================================================================================================================

export const sekHolbein = functions.firestore
    //check wenn e neue itrag created wird => onCreate .. evtl uf onUpdate wächsle
    .document('Nachrichten/Schulen/' + Schulen[9].replace(/\s/g, '')+ '/{DocumentID}').onCreate(async snapshot => {
            
        //nimmt dr snapshot usenander
         const data = snapshot.data() ?? [''];
         const target = data['target'] ?? [''];
         const tag = data['tag'] ?? [''];
         const klasse = data['klasse'] ?? [''];
         const grund = data['grund'] ?? [''];
         const raum = data['raum'] ?? [''];
         //-----------------------------------
         
 
         //payload = funktion für nochricht an user mit entsprächende wärt
         const payload: admin.messaging.MessagingPayload = {
             notification: {
                 title: tag,
                 body: klasse+ '\n'+ grund+'\n' + raum, //kombiniert werte mit \n, sprich neuer zeile
                 clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                 badge: '1' //nachrichten badge
             }
 
         };
 
         return fcm.sendToTopic(target, payload)
     })

//============================================================================================================================

export const sekLeonhard = functions.firestore
    //check wenn e neue itrag created wird => onCreate .. evtl uf onUpdate wächsle
    .document('Nachrichten/Schulen/' + Schulen[10].replace(/\s/g, '')+ '/{DocumentID}').onCreate(async snapshot => {
            
        //nimmt dr snapshot usenander
         const data = snapshot.data() ?? [''];
         const target = data['target'] ?? [''];
         const tag = data['tag'] ?? [''];
         const klasse = data['klasse'] ?? [''];
         const grund = data['grund'] ?? [''];
         const raum = data['raum'] ?? [''];
         //-----------------------------------
         
 
         //payload = funktion für nochricht an user mit entsprächende wärt
         const payload: admin.messaging.MessagingPayload = {
             notification: {
                 title: tag,
                 body: klasse+ '\n'+ grund+'\n' + raum, //kombiniert werte mit \n, sprich neuer zeile
                 clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                 badge: '1' //nachrichten badge
             }
 
         };
 
         return fcm.sendToTopic(target, payload)
     })

//============================================================================================================================

export const sekSandgruben = functions.firestore
    //check wenn e neue itrag created wird => onCreate .. evtl uf onUpdate wächsle
    .document('Nachrichten/Schulen/' + Schulen[11].replace(/\s/g, '')+ '/{DocumentID}').onCreate(async snapshot => {
            
        //nimmt dr snapshot usenander
         const data = snapshot.data() ?? [''];
         const target = data['target'] ?? [''];
         const tag = data['tag'] ?? [''];
         const klasse = data['klasse'] ?? [''];
         const grund = data['grund'] ?? [''];
         const raum = data['raum'] ?? [''];
         //-----------------------------------
         
 
         //payload = funktion für nochricht an user mit entsprächende wärt
         const payload: admin.messaging.MessagingPayload = {
             notification: {
                 title: tag,
                 body: klasse+ '\n'+ grund+'\n' + raum, //kombiniert werte mit \n, sprich neuer zeile
                 clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                 badge: '1' //nachrichten badge
             }
 
         };
 
         return fcm.sendToTopic(target, payload)
     })

//============================================================================================================================

export const sekStAlban = functions.firestore
    //check wenn e neue itrag created wird => onCreate .. evtl uf onUpdate wächsle
    .document('Nachrichten/Schulen/' + Schulen[12].replace(/\s/g, '')+ '/{DocumentID}').onCreate(async snapshot => {
            
        //nimmt dr snapshot usenander
         const data = snapshot.data() ?? [''];
         const target = data['target'] ?? [''];
         const tag = data['tag'] ?? [''];
         const klasse = data['klasse'] ?? [''];
         const grund = data['grund'] ?? [''];
         const raum = data['raum'] ?? [''];
         //-----------------------------------
         
 
         //payload = funktion für nochricht an user mit entsprächende wärt
         const payload: admin.messaging.MessagingPayload = {
             notification: {
                 title: tag,
                 body: klasse+ '\n'+ grund+'\n' + raum, //kombiniert werte mit \n, sprich neuer zeile
                 clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                 badge: '1' //nachrichten badge
             }
 
         };
 
         return fcm.sendToTopic(target, payload)
     })

//============================================================================================================================

export const sekTheobaldBaerwart = functions.firestore
    //check wenn e neue itrag created wird => onCreate .. evtl uf onUpdate wächsle
    .document('Nachrichten/Schulen/' + Schulen[13].replace(/\s/g, '')+ '/{DocumentID}').onCreate(async snapshot => {
            
        //nimmt dr snapshot usenander
         const data = snapshot.data() ?? [''];
         const target = data['target'] ?? [''];
         const tag = data['tag'] ?? [''];
         const klasse = data['klasse'] ?? [''];
         const grund = data['grund'] ?? [''];
         const raum = data['raum'] ?? [''];
         //-----------------------------------
         
 
         //payload = funktion für nochricht an user mit entsprächende wärt
         const payload: admin.messaging.MessagingPayload = {
             notification: {
                 title: tag,
                 body: klasse+ '\n'+ grund+'\n' + raum, //kombiniert werte mit \n, sprich neuer zeile
                 clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                 badge: '1' //nachrichten badge
             }
 
         };
 
         return fcm.sendToTopic(target, payload)
     })

//============================================================================================================================

export const sekVogesen = functions.firestore
    //check wenn e neue itrag created wird => onCreate .. evtl uf onUpdate wächsle
    .document('Nachrichten/Schulen/' + Schulen[14].replace(/\s/g, '')+ '/{DocumentID}').onCreate(async snapshot => {
            
        //nimmt dr snapshot usenander
         const data = snapshot.data() ?? [''];
         const target = data['target'] ?? [''];
         const tag = data['tag'] ?? [''];
         const klasse = data['klasse'] ?? [''];
         const grund = data['grund'] ?? [''];
         const raum = data['raum'] ?? [''];
         //-----------------------------------
         
 
         //payload = funktion für nochricht an user mit entsprächende wärt
         const payload: admin.messaging.MessagingPayload = {
             notification: {
                 title: tag,
                 body: klasse+ '\n'+ grund+'\n' + raum, //kombiniert werte mit \n, sprich neuer zeile
                 clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                 badge: '1' //nachrichten badge
             }
 
         };
 
         return fcm.sendToTopic(target, payload)
     })

//============================================================================================================================

export const sekWasgenring = functions.firestore
    //check wenn e neue itrag created wird => onCreate .. evtl uf onUpdate wächsle
    .document('Nachrichten/Schulen/' + Schulen[15].replace(/\s/g, '')+ '/{DocumentID}').onCreate(async snapshot => {
            
        //nimmt dr snapshot usenander
         const data = snapshot.data() ?? [''];
         const target = data['target'] ?? [''];
         const tag = data['tag'] ?? [''];
         const klasse = data['klasse'] ?? [''];
         const grund = data['grund'] ?? [''];
         const raum = data['raum'] ?? [''];
         //-----------------------------------
         
 
         //payload = funktion für nochricht an user mit entsprächende wärt
         const payload: admin.messaging.MessagingPayload = {
             notification: {
                 title: tag,
                 body: klasse+ '\n'+ grund+'\n' + raum, //kombiniert werte mit \n, sprich neuer zeile
                 clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                 badge: '1' //nachrichten badge
             }
 
         };
 
         return fcm.sendToTopic(target, payload)
     })

//============================================================================================================================

export const stJohann = functions.firestore
    //check wenn e neue itrag created wird => onCreate .. evtl uf onUpdate wächsle
    .document('Nachrichten/Schulen/' + Schulen[16].replace(/\s/g, '')+ '/{DocumentID}').onCreate(async snapshot => {
            
        //nimmt dr snapshot usenander
         const data = snapshot.data() ?? [''];
         const target = data['target'] ?? [''];
         const tag = data['tag'] ?? [''];
         const klasse = data['klasse'] ?? [''];
         const grund = data['grund'] ?? [''];
         const raum = data['raum'] ?? [''];
         //-----------------------------------
         
 
         //payload = funktion für nochricht an user mit entsprächende wärt
         const payload: admin.messaging.MessagingPayload = {
             notification: {
                 title: tag,
                 body: klasse+ '\n'+ grund+'\n' + raum, //kombiniert werte mit \n, sprich neuer zeile
                 clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                 badge: '1' //nachrichten badge
             }
 
         };
 
         return fcm.sendToTopic(target, payload)
     })

//============================================================================================================================

export const thierstein = functions.firestore
    //check wenn e neue itrag created wird => onCreate .. evtl uf onUpdate wächsle
    .document('Nachrichten/Schulen/' + Schulen[17].replace(/\s/g, '')+ '/{DocumentID}').onCreate(async snapshot => {
            
        //nimmt dr snapshot usenander
         const data = snapshot.data() ?? [''];
         const target = data['target'] ?? [''];
         const tag = data['tag'] ?? [''];
         const klasse = data['klasse'] ?? [''];
         const grund = data['grund'] ?? [''];
         const raum = data['raum'] ?? [''];
         //-----------------------------------
         
 
         //payload = funktion für nochricht an user mit entsprächende wärt
         const payload: admin.messaging.MessagingPayload = {
             notification: {
                 title: tag,
                 body: klasse+ '\n'+ grund+'\n' + raum, //kombiniert werte mit \n, sprich neuer zeile
                 clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                 badge: '1' //nachrichten badge
             }
 
         };
 
         return fcm.sendToTopic(target, payload)
     })

//============================================================================================================================

export const dreirosen = functions.firestore
    //check wenn e neue itrag created wird => onCreate .. evtl uf onUpdate wächsle
    .document('Nachrichten/Schulen/' + Schulen[18].replace(/\s/g, '')+ '/{DocumentID}').onCreate(async snapshot => {
            
        //nimmt dr snapshot usenander
         const data = snapshot.data() ?? [''];
         const target = data['target'] ?? [''];
         const tag = data['tag'] ?? [''];
         const klasse = data['klasse'] ?? [''];
         const grund = data['grund'] ?? [''];
         const raum = data['raum'] ?? [''];
         //-----------------------------------
         
 
         //payload = funktion für nochricht an user mit entsprächende wärt
         const payload: admin.messaging.MessagingPayload = {
             notification: {
                 title: tag,
                 body: klasse+ '\n'+ grund+'\n' + raum, //kombiniert werte mit \n, sprich neuer zeile
                 clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                 badge: '1' //nachrichten badge
             }
 
         };
 
         return fcm.sendToTopic(target, payload)
     })

//============================================================================================================================

export const isaakIselin = functions.firestore
    //check wenn e neue itrag created wird => onCreate .. evtl uf onUpdate wächsle
    .document('Nachrichten/Schulen/' + Schulen[19].replace(/\s/g, '')+ '/{DocumentID}').onCreate(async snapshot => {
            
        //nimmt dr snapshot usenander
         const data = snapshot.data() ?? [''];
         const target = data['target'] ?? [''];
         const tag = data['tag'] ?? [''];
         const klasse = data['klasse'] ?? [''];
         const grund = data['grund'] ?? [''];
         const raum = data['raum'] ?? [''];
         //-----------------------------------
         
 
         //payload = funktion für nochricht an user mit entsprächende wärt
         const payload: admin.messaging.MessagingPayload = {
             notification: {
                 title: tag,
                 body: klasse+ '\n'+ grund+'\n' + raum, //kombiniert werte mit \n, sprich neuer zeile
                 clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                 badge: '1' //nachrichten badge
             }
 
         };
 
         return fcm.sendToTopic(target, payload)
     })

//============================================================================================================================

export const kleinhuningen = functions.firestore
    //check wenn e neue itrag created wird => onCreate .. evtl uf onUpdate wächsle
    .document('Nachrichten/Schulen/' + Schulen[20].replace(/\s/g, '')+ '/{DocumentID}').onCreate(async snapshot => {
            
        //nimmt dr snapshot usenander
         const data = snapshot.data() ?? [''];
         const target = data['target'] ?? [''];
         const tag = data['tag'] ?? [''];
         const klasse = data['klasse'] ?? [''];
         const grund = data['grund'] ?? [''];
         const raum = data['raum'] ?? [''];
         //-----------------------------------
         
 
         //payload = funktion für nochricht an user mit entsprächende wärt
         const payload: admin.messaging.MessagingPayload = {
             notification: {
                 title: tag,
                 body: klasse+ '\n'+ grund+'\n' + raum, //kombiniert werte mit \n, sprich neuer zeile
                 clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                 badge: '1' //nachrichten badge
             }
 
         };
 
         return fcm.sendToTopic(target, payload)
     })

//============================================================================================================================

export const fachzentrumGestalten = functions.firestore
    //check wenn e neue itrag created wird => onCreate .. evtl uf onUpdate wächsle
    .document('Nachrichten/Schulen/' + Schulen[21].replace(/\s/g, '')+ '/{DocumentID}').onCreate(async snapshot => {
            
        //nimmt dr snapshot usenander
         const data = snapshot.data() ?? [''];
         const target = data['target'] ?? [''];
         const tag = data['tag'] ?? [''];
         const klasse = data['klasse'] ?? [''];
         const grund = data['grund'] ?? [''];
         const raum = data['raum'] ?? [''];
         //-----------------------------------
         
 
         //payload = funktion für nochricht an user mit entsprächende wärt
         const payload: admin.messaging.MessagingPayload = {
             notification: {
                 title: tag,
                 body: klasse+ '\n'+ grund+'\n' + raum, //kombiniert werte mit \n, sprich neuer zeile
                 clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                 badge: '1' //nachrichten badge
             }
 
         };
 
         return fcm.sendToTopic(target, payload)
     })

//============================================================================================================================

export const tagesstrukturenDreiLinden = functions.firestore
    //check wenn e neue itrag created wird => onCreate .. evtl uf onUpdate wächsle
    .document('Nachrichten/Schulen/' + Schulen[22].replace(/\s/g, '')+ '/{DocumentID}').onCreate(async snapshot => {
            
        //nimmt dr snapshot usenander
         const data = snapshot.data() ?? [''];
         const target = data['target'] ?? [''];
         const tag = data['tag'] ?? [''];
         const klasse = data['klasse'] ?? [''];
         const grund = data['grund'] ?? [''];
         const raum = data['raum'] ?? [''];
         //-----------------------------------
         
 
         //payload = funktion für nochricht an user mit entsprächende wärt
         const payload: admin.messaging.MessagingPayload = {
             notification: {
                 title: tag,
                 body: klasse+ '\n'+ grund+'\n' + raum, //kombiniert werte mit \n, sprich neuer zeile
                 clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                 badge: '1' //nachrichten badge
             }
 
         };
 
         return fcm.sendToTopic(target, payload)
     })

//============================================================================================================================

export const zBAGundeldingen = functions.firestore
    //check wenn e neue itrag created wird => onCreate .. evtl uf onUpdate wächsle
    .document('Nachrichten/Schulen/' + Schulen[23].replace(/\s/g, '')+ '/{DocumentID}').onCreate(async snapshot => {
            
        //nimmt dr snapshot usenander
         const data = snapshot.data() ?? [''];
         const target = data['target'] ?? [''];
         const tag = data['tag'] ?? [''];
         const klasse = data['klasse'] ?? [''];
         const grund = data['grund'] ?? [''];
         const raum = data['raum'] ?? [''];
         //-----------------------------------
         
 
         //payload = funktion für nochricht an user mit entsprächende wärt
         const payload: admin.messaging.MessagingPayload = {
             notification: {
                 title: tag,
                 body: klasse+ '\n'+ grund+'\n' + raum, //kombiniert werte mit \n, sprich neuer zeile
                 clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                 badge: '1' //nachrichten badge
             }
 
         };
 
         return fcm.sendToTopic(target, payload)
     })

//============================================================================================================================

export const zBALetzi = functions.firestore
    //check wenn e neue itrag created wird => onCreate .. evtl uf onUpdate wächsle
    .document('Nachrichten/Schulen/' + Schulen[24].replace(/\s/g, '')+ '/{DocumentID}').onCreate(async snapshot => {
            
        //nimmt dr snapshot usenander
         const data = snapshot.data() ?? [''];
         const target = data['target'] ?? [''];
         const tag = data['tag'] ?? [''];
         const klasse = data['klasse'] ?? [''];
         const grund = data['grund'] ?? [''];
         const raum = data['raum'] ?? [''];
         //-----------------------------------
         
 
         //payload = funktion für nochricht an user mit entsprächende wärt
         const payload: admin.messaging.MessagingPayload = {
             notification: {
                 title: tag,
                 body: klasse+ '\n'+ grund+'\n' + raum, //kombiniert werte mit \n, sprich neuer zeile
                 clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                 badge: '1' //nachrichten badge
             }
 
         };
 
         return fcm.sendToTopic(target, payload)
     })

//============================================================================================================================

export const bFSGebeudeA = functions.firestore
    //check wenn e neue itrag created wird => onCreate .. evtl uf onUpdate wächsle
    .document('Nachrichten/Schulen/' + Schulen[25].replace(/\s/g, '')+ '/{DocumentID}').onCreate(async snapshot => {
            
        //nimmt dr snapshot usenander
         const data = snapshot.data() ?? [''];
         const target = data['target'] ?? [''];
         const tag = data['tag'] ?? [''];
         const klasse = data['klasse'] ?? [''];
         const grund = data['grund'] ?? [''];
         const raum = data['raum'] ?? [''];
         //-----------------------------------
         
 
         //payload = funktion für nochricht an user mit entsprächende wärt
         const payload: admin.messaging.MessagingPayload = {
             notification: {
                 title: tag,
                 body: klasse+ '\n'+ grund+'\n' + raum, //kombiniert werte mit \n, sprich neuer zeile
                 clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                 badge: '1' //nachrichten badge
             }
 
         };
 
         return fcm.sendToTopic(target, payload)
     })

//============================================================================================================================

export const bFSGebeudeB = functions.firestore
    //check wenn e neue itrag created wird => onCreate .. evtl uf onUpdate wächsle
    .document('Nachrichten/Schulen/' + Schulen[26].replace(/\s/g, '')+ '/{DocumentID}').onCreate(async snapshot => {
            
        //nimmt dr snapshot usenander
         const data = snapshot.data() ?? [''];
         const target = data['target'] ?? [''];
         const tag = data['tag'] ?? [''];
         const klasse = data['klasse'] ?? [''];
         const grund = data['grund'] ?? [''];
         const raum = data['raum'] ?? [''];
         //-----------------------------------
         
 
         //payload = funktion für nochricht an user mit entsprächende wärt
         const payload: admin.messaging.MessagingPayload = {
             notification: {
                 title: tag,
                 body: klasse+ '\n'+ grund+'\n' + raum, //kombiniert werte mit \n, sprich neuer zeile
                 clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                 badge: '1' //nachrichten badge
             }
 
         };
 
         return fcm.sendToTopic(target, payload)
     })

//============================================================================================================================

export const bFSGebeudeC = functions.firestore
    //check wenn e neue itrag created wird => onCreate .. evtl uf onUpdate wächsle
    .document('Nachrichten/Schulen/' + Schulen[27].replace(/\s/g, '')+ '/{DocumentID}').onCreate(async snapshot => {
            
        //nimmt dr snapshot usenander
         const data = snapshot.data() ?? [''];
         const target = data['target'] ?? [''];
         const tag = data['tag'] ?? [''];
         const klasse = data['klasse'] ?? [''];
         const grund = data['grund'] ?? [''];
         const raum = data['raum'] ?? [''];
         //-----------------------------------
         
 
         //payload = funktion für nochricht an user mit entsprächende wärt
         const payload: admin.messaging.MessagingPayload = {
             notification: {
                 title: tag,
                 body: klasse+ '\n'+ grund+'\n' + raum, //kombiniert werte mit \n, sprich neuer zeile
                 clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                 badge: '1' //nachrichten badge
             }
 
         };
 
         return fcm.sendToTopic(target, payload)
     })

//============================================================================================================================

export const bFSGebeudeD = functions.firestore
    //check wenn e neue itrag created wird => onCreate .. evtl uf onUpdate wächsle
    .document('Nachrichten/Schulen/' + Schulen[28].replace(/\s/g, '')+ '/{DocumentID}').onCreate(async snapshot => {
            
        //nimmt dr snapshot usenander
         const data = snapshot.data() ?? [''];
         const target = data['target'] ?? [''];
         const tag = data['tag'] ?? [''];
         const klasse = data['klasse'] ?? [''];
         const grund = data['grund'] ?? [''];
         const raum = data['raum'] ?? [''];
         //-----------------------------------
         
 
         //payload = funktion für nochricht an user mit entsprächende wärt
         const payload: admin.messaging.MessagingPayload = {
             notification: {
                 title: tag,
                 body: klasse+ '\n'+ grund+'\n' + raum, //kombiniert werte mit \n, sprich neuer zeile
                 clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                 badge: '1' //nachrichten badge
             }
 
         };
 
         return fcm.sendToTopic(target, payload)
     })

//============================================================================================================================

export const pZBSBibliothek = functions.firestore
    //check wenn e neue itrag created wird => onCreate .. evtl uf onUpdate wächsle
    .document('Nachrichten/Schulen/' + Schulen[29].replace(/\s/g, '')+ '/{DocumentID}').onCreate(async snapshot => {
            
        //nimmt dr snapshot usenander
         const data = snapshot.data() ?? [''];
         const target = data['target'] ?? [''];
         const tag = data['tag'] ?? [''];
         const klasse = data['klasse'] ?? [''];
         const grund = data['grund'] ?? [''];
         const raum = data['raum'] ?? [''];
         //-----------------------------------
         
 
         //payload = funktion für nochricht an user mit entsprächende wärt
         const payload: admin.messaging.MessagingPayload = {
             notification: {
                 title: tag,
                 body: klasse+ '\n'+ grund+'\n' + raum, //kombiniert werte mit \n, sprich neuer zeile
                 clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                 badge: '1' //nachrichten badge
             }
 
         };
 
         return fcm.sendToTopic(target, payload)
     })

//============================================================================================================================

export const pZBSmedialab = functions.firestore
    //check wenn e neue itrag created wird => onCreate .. evtl uf onUpdate wächsle
    .document('Nachrichten/Schulen/' + Schulen[30].replace(/\s/g, '')+ '/{DocumentID}').onCreate(async snapshot => {
            
        //nimmt dr snapshot usenander
         const data = snapshot.data() ?? [''];
         const target = data['target'] ?? [''];
         const tag = data['tag'] ?? [''];
         const klasse = data['klasse'] ?? [''];
         const grund = data['grund'] ?? [''];
         const raum = data['raum'] ?? [''];
         //-----------------------------------
         
 
         //payload = funktion für nochricht an user mit entsprächende wärt
         const payload: admin.messaging.MessagingPayload = {
             notification: {
                 title: tag,
                 body: klasse+ '\n'+ grund+'\n' + raum, //kombiniert werte mit \n, sprich neuer zeile
                 clickAction: 'FLUTTER_NOTIFICATION_CLICK', //wichtig für flutter
                 badge: '1' //nachrichten badge
             }
 
         };
 
         return fcm.sendToTopic(target, payload)
     })

//============================================================================================================================

