import ReactDOM from "react-dom";
import App from "./App";
import {
    QueryClient,
    QueryClientProvider,
  } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            //Aqui se pueden declarar las opciones generales para el proyecto
            //cabe mencionar que es posible reescribir estas opciones si se
            //desea algo diferente en otra parte del proyecto.
            staleTime: 10000,
            cacheTime: 5000,
        }
    }
})

ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>,
    document.getElementById("root")
);
