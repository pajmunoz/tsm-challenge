import PageHeader from "../components/PageHeader/PageHeader";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import UserList from "../pages/UserList/UserList";
import UserDetail from "../pages/UserDetail/UserDetail";

const queryClient = new QueryClient();
export default function MainRouter() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router basename="/tsm-challenge">
                <PageHeader />
                <Routes>
                    <Route path="/" element={<UserList />} />
                    <Route path="/user/:id" element={<UserDetail />} />
                </Routes>
            </Router>
        </QueryClientProvider>
    )
}
