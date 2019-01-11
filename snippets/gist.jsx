//  login.js

import React from 'react';

const Login = ({ onSubmit }) => (
  <div>
    <form
      data-test="login-form"
      onSubmit={e => {
        e.preventDefault();
        const { username, password } = e.target.elements;
        onSubmit({
          username: username.value,
          password: password.value,
        });
      }}
    >
      <input
        placeholder="Username..."
        name="username"
        data-test="username-input"
      />
      <input
        placeholder="Password..."
        type="password"
        name="password"
        data-test="password-input"
      />
      <button type="submit" data-test="login-submit">
        Submit
      </button>
    </form>
  </div>
);

export default Login;

//  login.test.js

import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login';

const findElementByTestId = (node, id) =>
  node.querySelector(`[data-test="${id}"]`);

test('calls onSubmit with the username and password when submitted', () => {
  const fakeUser = { username: 'chucknorris', password: '(╯°□°）╯︵ ┻━┻' };
  const handleSubmit = jest.fn();
  const div = document.createElement('div');
  ReactDOM.render(<Login onSubmit={handleSubmit} />, div);
  const usernameNode = findElementByTestId(div, 'username-input');
  const passwordNode = findElementByTestId(div, 'password-input');
  const formWrapper = findElementByTestId(div, 'login-form');
  usernameNode.value = fakeUser.username;
  passwordNode.value = fakeUser.password;
  const event = new window.Event('submit');
  formWrapper.dispatchEvent(event);
  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith(fakeUser);
});
