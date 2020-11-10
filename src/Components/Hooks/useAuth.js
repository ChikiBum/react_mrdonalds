
import { useEffect, useState } from 'react';

export function useAuth(authFirebase){
     const [authentification, setAuthentification] = useState(null);

     const provider = new authFirebase.GoogleAuthProvider();

     const auth = authFirebase();

     const logIn = () => auth.signInWithPopup(provider);
     const logOut = () => auth.signOut().catch(err => console.log(err))
     ;

     useEffect(() => {
        auth.onAuthStateChanged( user => {
            if(user) {
                setAuthentification(user);
            } else  {
                setAuthentification(null);
            }
       })
     }, [auth, authentification]);

     return{ authentification, logIn, logOut };
};