import React, { createElement } from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('Рендеринг компонента', () => {
  test('Совпадение со снапшотом', () => {
    const app = renderer.create(<App />);
    expect(app.toJSON()).toMatchSnapshot();
  });
});
