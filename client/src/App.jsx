import CarouselEffect from '../src/components/Carousel/CarouselEffect '
 import Router from '../Router'
import './App.css'
import { useContext, useEffect } from 'react'
import { DataContext } from './components/Dataprovider/Dataprovider'
 import { Type } from './Utils/actiontype'
 import { auth} from './Utils/firebase'
 
function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <>
      <Router />
    </>
  );
}

export default App
