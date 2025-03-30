// part12-containers-applications/todo-app/todo-frontend/src/Todo.test.jsx
import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Todo from './Todos/Todo';

test('renders todo text and status', () => {
  render(<Todo text="Learn Docker" done={true} />);
  expect(screen.getByText('Learn Docker')).toBeDefined();
  expect(screen.getByText('Done')).toBeDefined();
});