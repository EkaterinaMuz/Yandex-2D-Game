import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {
  MainPage,
  LeaderboardPage,
  ProfilePage,
  SignUpPage,
  SignInPage,
  EndScreen,
  StartScreen,
  BlogPage,
  NotFoundPage,
} from './pages';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* TODO: выпилить рут после https://yandex-2d-game.atlassian.net/browse/TASK-14 */}
        <Route path="/start" element={<StartScreen />} />
        {/* TODO: выпилить рут после https://yandex-2d-game.atlassian.net/browse/TASK-16 */}
        <Route path="/end" element={<EndScreen />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<LeaderboardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
