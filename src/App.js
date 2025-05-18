
import { BrowserRouter, Route, Router, Routes } from 'react-router';
import MainHome from './pages/MainHome';
import ActivityList from './components/ActivityList';
import CreateActivity from './pages/CreateActivity';
import EditActivity from './pages/EditActivity';
import ActivityDetails from './components/ActivityDetails';
import RequireAuth from './lib/hooks/RequireAuth';
import LoginPage from './LoginPage';
function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={
          <RequireAuth>
            <MainHome />
          </RequireAuth>
        }>
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
