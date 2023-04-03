import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render, fireEvent,screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BankAccount from './bankAccount';
import reducer from './reducers';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';

describe('BankAccount', () => {
  let store;
  

  beforeEach(() => {
    store = createStore(reducer, { balance: 0 });
  });

  xtest('renders bank account balance', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BankAccount />
      </Provider>
    );
    expect(getByText('Bank Account Balance: 0')).toBeInTheDocument();
  });

  xtest('handles deposit', () => {
    // const { getByLabelText, getByText, getByRole } = 
    render(
      <Provider store={store}>
        <BankAccount />
      </Provider>
    );
    
    // fireEvent.change(screen.getByRole('Deposit Amount:'), { target: { value: '100' } });
    // fireEvent.submit(screen.getByText('Deposit'));
    // fireEvent.click(getByRole('button',{ name: /Deposit/i }))
    // expect(screen.getByText('Bank Account Balance: 100')).toBeInTheDocument();
    // expect(getByRole('h2')).toHaveTextContent('Bank Account Balance: 100');
    

    expect(screen.getByRole("heading")).toHaveTextContent('Bank Account Balance:')
    // const inputNode = screen.getByLabelText('amount')
    const inputNode = screen.getByTestId('depositId')
    fireEvent.change(inputNode,{target:{value:100}});
    // fireEvent.change(screen.getByTestId('da', { target: { value: 100 }}));
    fireEvent.submit(screen.getByRole('button',{ name: /Deposit/i }));
    // fireEvent.submit(screen.getByTestId('b1'));
    expect(screen.getByRole("heading").textContent).toEqual('Bank Account Balance: 100')

    
  });

  test('handles credit', () => {
    // const { getByLabelText, getByText, getByRole } = 
    render(
      <Provider store={store}>
        <BankAccount />
      </Provider>
    );

    const inputNode = screen.getByTestId('creditId')
    fireEvent.change(inputNode,{target:{value:90}});
    fireEvent.submit(screen.getByRole('button',{ name: /Credit/i }));
    // fireEvent.submit(screen.getByTestId('b1'));
    expect(screen.getByRole("heading").textContent).toEqual('Bank Account Balance: 10')
    // fireEvent.change(getByLabelText('Credit Amount:'), { target: { value: '30' } });
    // // fireEvent.click(getByRole('button',{ name: /Credit/i }))
    // fireEvent.submit(getByText('Credit'));
    // expect(getByText('Bank Account Balance: 70')).toBeInTheDocument();
    // expect(getByRole('h2')).toHaveTextContent('Bank Account Balance: 70');
  });
});
