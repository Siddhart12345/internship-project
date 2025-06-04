import { IonContent, IonPage } from '@ionic/react';
import React from 'react'

const JsBasics: React.FC = () => {
    const abc=230;
     const bac=abc ===230?abc:30;
    console.log(bac);
    console.log("abc:",abc);
    if(abc===230){
        console.log("hello world");
    }
    
    return(
        <IonPage>
            <IonContent>
        <div>abc: {abc}</div>
        {bac===abc && <div>bac: {bac}</div>}
            <div>bac: {abc == 230 ? "hi" : "by"}</div>
        
        </IonContent>
        </IonPage>
    )
}
export default JsBasics;