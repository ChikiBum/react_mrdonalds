import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';

const firebaseConfig = {
  apiKey: "AIzaSyD0gMmNumQGEcTmNLKlgXpKpRmXFuJSeB4",
  authDomain: "mrdonalds-b4db0.firebaseapp.com",
  databaseURL: "https://mrdonalds-b4db0.firebaseio.com",
  projectId: "mrdonalds-b4db0",
  storageBucket: "mrdonalds-b4db0.appspot.com",
  messagingSenderId: "414161587791",
  appId: "1:414161587791:web:db84190e942d4c7061243a",
  measurementId: "G-DPN6Q1H3YK"
};

firebase.initializeApp(firebaseConfig);

function App() {

  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();
  useTitle(openItem.openItem);

  return (
    <React.Fragment>
      <GlobalStyle/>
      <NavBar {...auth}/>
      <Order 
          {...orders} 
          {...openItem} 
          {...auth}
          firebaseDatabase={firebase.database}
      />
      <Menu {...openItem}/>
      { openItem.openItem && <ModalItem {...openItem} {...orders}/>}
    </React.Fragment>
    
  );
}

export default App;
