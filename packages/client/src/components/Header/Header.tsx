import { Link } from 'react-router-dom';

import { Flex } from 'antd';

export function Header() {
  return (
    <Flex justify="flex-end" gap={20}>
      <Link to="/">Главная</Link>
      {/* TODO: выпилить рут после https://yandex-2d-game.atlassian.net/browse/TASK-14 */}
      <Link to="/start">Стартовый экран</Link>
      {/* TODO: выпилить рут после https://yandex-2d-game.atlassian.net/browse/TASK-16 */}
      <Link to="/end">Последний экран</Link>
      <Link to="/profile">Профиль</Link>
      <Link to="/leaderboard">Лидербоард</Link>
      <Link to="/blog">Блог</Link>
      <Link to="/sign-in">Войти</Link>
      <Link to="/sign-up">Регистрация</Link>
    </Flex>
  );
}
