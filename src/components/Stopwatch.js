import React, { Component } from "react";
import { IonButton, IonIcon, IonText } from '@ionic/react';
import { star } from 'ionicons/icons';
import "./Stopwatch.css";

class Stopwatch extends Component {
        state = {
          timerOn: false,
          timerStart: 0,
          timerTime: 0,
          preSetTime: 0,
          preSetTimer: 0
        };    
 
  startTimer = () => {
        this.setState({
          timerOn: true,
          timerTime: this.state.timerTime,
          timerStart: Date.now() - this.state.timerTime
        });
        this.timer = setInterval(() => {
          this.setState({
            timerTime: Date.now() - this.state.timerStart
          });
        }, 10);
      };

  stopTimer = () => {
    this.state.preSetTimer !== 0 && this.setState({ timerTime: this.state.preSetTimer });
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };
  
  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0
    });
  };

  setStateSync(state){
    return new Promise(resolve=>{
        this.setState(state,resolve)
    })
  };
  async setPreSetTime(snglBtn){
    if (snglBtn === "reset") {
      await this.setStateSync({
        preSetTime: 0,
        preSetTimer: 0 
      })
    } else {
      await this.setStateSync({
        preSetTime: parseInt(this.state.preSetTime + snglBtn.toString()),
        preSetTimer: parseInt(this.state.preSetTime.toString() + snglBtn.toString() + "0")
      })
    }
    console.log ( this.state.preSetTimer )
  };

  render() {

    const btnStyle = {
      opacity: this.props.numPadToggle
    }
    
    const btnList = [1,2,3,4,5,6,7,8,9,0,"reset"];

    const timeBtns = btnList.map((snglBtn) =>
      <IonButton className={"Numpad btn_"+ snglBtn.toString()} style={btnStyle} key={snglBtn.toString()} onClick={() => this.setPreSetTime(snglBtn)}>{snglBtn}</IonButton>
    );

    const { timerTime } = this.state;
    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    // let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    // let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

    return (
      <div className="Stopwatch">
          <div className="Stopwatch-display">
                {/* {hours} : {minutes} : {seconds} : {centiseconds} */}
                <IonText className="Timer">
                  {seconds} : {centiseconds}
                </IonText>
                <div>
                {this.state.timerOn === false && this.state.timerTime === 0 && (
                <IonButton onClick={this.startTimer}>Start</IonButton>
                )}
                {this.state.timerOn === true && (
                  <IonButton onClick={this.stopTimer}>Stop</IonButton>
                )}
                {this.state.timerOn === false && this.state.timerTime > 0 && (
                  <IonButton onClick={this.startTimer}>Resume</IonButton>
                )}
                {this.state.timerOn === false && this.state.timerTime > 0 && (
                  <IonButton onClick={this.resetTimer}>Reset</IonButton>
                )}
                </div>
                <br />
                <IonIcon icon={ star } /> {/* temp icon so IDE doesn't nag for not being used */}
          </div>
          {timeBtns}
        </div>
    );
  }
}

export default Stopwatch;
