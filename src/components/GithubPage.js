import React from "react";
import ObserverComponent from "./ObserverComponent";
import store from "../store";
import Container from "react-bootstrap/Container";

class HomePage extends ObserverComponent {

    componentDidMount() {
        super.componentDidMount();
        store.fetchGithubRepositories("vysokyj");
    }

    render() {
        const { github } = this.state;
        return (
            <Container>
                <h1>Github AJAX Request</h1>
                <p>User: {github.user}</p>
                <ul>
                    {github.repositories.map(repo => <li key={repo.url}><a href={repo.url}>{repo.url}</a></li>)}
                </ul>
            </Container>
        );
    }
}
export default HomePage;
