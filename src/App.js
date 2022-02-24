import './App.css';
import { BrowserRouter as Router,Route ,Routes} from 'react-router-dom';
import Allmeetup from './pages/AllMeetups';
import Favourite from './pages/Favourite';
import Newmeetup from './pages/NewMeetup';
import Layout from './components/layouts/Layout';
import { FavouritesContextProvider } from "./store/favourites-context";


function App() {
  return (
    <FavouritesContextProvider>


      <Router>

    
    
        <div className="App">
          <Layout>

         
       
          <Routes>
         
            <Route 
              path='/favourites' 
              element={<Favourite/>}
            />
            <Route 
              path='/newmeetup' 
              element={<Newmeetup/>}
            />
            <Route 
              path='/' 
              element={<Allmeetup/>}
            />

          </Routes>
          </Layout>
         
    
    </div>
    </Router>
    </FavouritesContextProvider>

  
  
  );
}

export default App;
