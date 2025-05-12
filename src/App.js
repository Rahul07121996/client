
import { BrowserRouter, Route, Router, Routes } from 'react-router';
import MainHome from './pages/MainHome';
import ActivityList from './components/ActivityList';
import CreateActivity from './pages/CreateActivity';
import EditActivity from './pages/EditActivity';
import ActivityDetails from './components/ActivityDetails';
function App() {

  return (
    <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<MainHome />}>
            <Route index element={<ActivityList />} />
            <Route path="create" element={<CreateActivity />} />
            <Route path="edit/:id" element={<EditActivity />} />
            <Route path="details/:id" element={<ActivityDetails />} />
          </Route>
        </Routes>
    
    </BrowserRouter>
  );
}

export default App;
