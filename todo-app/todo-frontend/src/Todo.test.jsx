// part12-containers-applications/todo-app/todo-frontend/src/Todo.test.jsx
import { render, screen } from '@testing-library/react';
import Todo from './Todo';

test('renders todo text and status', () => {
  render(<Todo text="Learn Docker" done={true} />);
  expect(screen.getByText('Learn Docker')).toBeInTheDocument();
  expect(screen.getByText('Done')).toBeInTheDocument();
});