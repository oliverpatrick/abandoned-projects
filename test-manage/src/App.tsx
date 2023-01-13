import React, { PropsWithChildren, useState } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Chakra from './component/Chakra';

import { IUser } from './utils/interfaces/IUser';
import { AuthContext } from './utils/context/AuthContext';

import { store } from './store';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/home/HomePage';
import HolidayPage from './pages/holidays/HolidayPage';
import TimesheetPage from './pages/timesheets/TimesheetPage';
import SettingsPage from './pages/settings/SettingsPage';
import { AuthenticatedRoute } from './component/AuthenticatedRoute';
import AppPage from './pages/AppPage';

interface AppProps {
  user?: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}

function AppWithProviders({
  children,
  user,
  setUser
}: PropsWithChildren & AppProps) {
  return (
    <ReduxProvider store={store}>
      <AuthContext.Provider value={{ user, updateAuthUser: setUser }}>
        <Chakra>{children}</Chakra>
      </AuthContext.Provider>
    </ReduxProvider>
  );
}

function App() {
  const [user, setUser] = useState<IUser>();

  return (
    <AppWithProviders user={user} setUser={setUser}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<AuthenticatedRoute children={<AppPage />} />}>
          <Route path="settings" element={<SettingsPage />}>
            {/* <Route path="profile" element={<SettingsProfilePage />} />
                    <Route path="appearance" element={<SettingsAppearancePage />} /> */}
          </Route>
          <Route path="Home" element={<HomePage />}>
            {/* <Route path="current" element={<CurrentCallPage />} /> */}
          </Route>
          <Route path="Holiday" element={<HolidayPage />}>
            {/* <Route path="current" element={<CurrentCallPage />} /> */}
          </Route>
          <Route path="Timesheet" element={<TimesheetPage />}>
            {/* <Route path="current" element={<CurrentCallPage />} /> */}
          </Route>
        </Route>
      </Routes>
    </AppWithProviders>
  );
}

export default App;
