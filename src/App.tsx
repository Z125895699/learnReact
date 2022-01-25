import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProjectListScreen } from './screens/project-list/index';
import { LoginScreen } from './unauthenticated-app/login';
import { useAuth } from 'context/auth-context';
import AuthenticatedApp from 'authenticated-app';
import { UnauthenticatedApp } from 'unauthenticated-app';

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? (
        <AuthenticatedApp></AuthenticatedApp>
      ) : (
        <UnauthenticatedApp></UnauthenticatedApp>
      )}
      {/* <ProjectListScreen></ProjectListScreen> */}
      {/* <LoginScreen></LoginScreen> */}
    </div>
  );
}

export default App;
