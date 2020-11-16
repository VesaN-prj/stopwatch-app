import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import Stopwatch from '../components/Stopwatch.js';
import './Home.css';

const Home: React.FC = () => {
  const [btnStatus, setBtnStatus ] = useState({btnToggle: 0});
  function clickToggle(){
    btnStatus.btnToggle !== 0 ? setBtnStatus({btnToggle: 0}) : setBtnStatus({btnToggle: 1});
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle onClick={clickToggle}>Stopwatch</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle onClick={clickToggle} size="large">Stopwatch</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Stopwatch numPadToggle={btnStatus.btnToggle} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
