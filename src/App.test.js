import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory } from '../test/testUtils';
import App, { UnconnectedApp } from './App';

const setup = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe('redux props', () => {
  test('has success piece of state as prop', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test('has secretWord piece of state as prop', () => {
    const secretWord = 'party';
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });
  test('has guessedWords piece of state as prop', () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords);
  });
  test('has getSecretWord action creator as a function prop', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

test('getSecretWord runs on App mount', () => {
  // jest mock function
  const getSecretWordMock = jest.fn();
  const props = {
    getSecretWord: getSecretWordMock,
    success: true,
    guessedWords: []
  };
  // set up App component with getSecretWordMock as the getSecretWord prop
  const wrapper = shallow(<UnconnectedApp {...props} />);
  // explicitely run lifecycle method
  wrapper.instance().componentDidMount();
  // check if mock function ran
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;

  expect(getSecretWordCallCount).toBe(1);
});
