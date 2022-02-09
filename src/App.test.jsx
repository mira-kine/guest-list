import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { GuestProvider } from './context/GuestProvider/GuestProvider';

test('guest can submit entry', () => {
  render(
    <GuestProvider>
      <App />
    </GuestProvider>
  );
  // guest enters name
  const guestName = screen.getByRole('textbox', { name: /guest name:/i });
  const guest = 'mira';
  userEvent.type(guestName, guest);
  // guest enters entry
  const entryInput = screen.getByRole('textbox', { name: /guest entry:/i });
  const entry = 'Hello';
  userEvent.type(entryInput, entry);
  // guest clicks submit form
  const submit = screen.getByRole('button');
  userEvent.click(submit);
  // renders guest card on screen
  const message = screen.getByText(/mira 🌸/i);
  const entryMessage = screen.getByText(/hello /i);

  expect(guest).toBe('mira');
  expect(entry).toBe('Hello');
  expect(message).toBeInTheDocument();
  expect(entryMessage).toBeInTheDocument();
});
