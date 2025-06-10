import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import PostContainer from "../../components/PostContainer/PostContainer";
import UserDetailContainer from "../../components/UserDetailContainer/UserDetailContainer";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";

export default function UserDetail() {
    const { id } = useParams();
    //envuelvo el componente en un error boundary

    return (
        <ErrorBoundary>
            <Container maxWidth="md" sx={{ marginTop: '2.5em' }}>
                <UserDetailContainer id={id || ''} />
                <PostContainer id={id || ''} />
            </Container>
        </ErrorBoundary>
    );
}
