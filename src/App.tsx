import './App.css'
import PageHeader from './components/PageHeader/PageHeader'
import UserList from './pages/UserList/UserList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserDetail from './pages/UserDetail/UserDetail'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient();
function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <PageHeader />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
