import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient();

export const AppQueryClientProvider = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
