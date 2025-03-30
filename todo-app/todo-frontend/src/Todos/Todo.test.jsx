// part12-containers-applications/todo-app/todo-frontend/src/Todos/Todo.test.jsx
import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Todo from './Todo';

test('renders todo text correctly', () => {
  render(<Todo text="Learn Docker" done={false} />);
  expect(screen.getByText('Learn Docker')).toBeDefined();
  expect(screen.getByText('Not Done')).toBeDefined();
});

test('renders done status correctly', () => {
  render(<Todo text="Learn Docker" done={true} />);
  expect(screen.getByText('Learn Docker')).toBeDefined();
  expect(screen.getByText('Done')).toBeDefined();
});