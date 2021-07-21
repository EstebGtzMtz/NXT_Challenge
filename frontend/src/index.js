import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router'
import { ChakraProvider } from '@chakra-ui/react'


const WithRouter = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  )
}

ReactDOM.render(
  <WithRouter />,
  document.getElementById('root')
);