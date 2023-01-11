import { RouterProvider } from 'react-router-dom';
import router from './services/routes'
import './App.css';

import { Provider } from 'react-redux';


function App() {
  return (
    
    <RouterProvider router={router}/>
    
  );
}

export default App;
