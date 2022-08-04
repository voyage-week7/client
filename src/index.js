import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './layouts/App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import GlobalStyle from './globalStyle';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient({});
queryClient.setDefaultOptions({
  queries: {
    retry: 0,
    refetchOnWindowFocus: false,
  },
});

root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>
);
