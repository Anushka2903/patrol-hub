import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './Component.js/Store/userStore';

test('renders app navigation', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByText(/PatrolHub/i)).toBeInTheDocument();
});
