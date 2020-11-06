import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Stopwatch from '../components/Stopwatch.js';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Stopwatch</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Stopwatch</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Stopwatch />
      </IonContent>
    </IonPage>
  );
};

export default Home;
