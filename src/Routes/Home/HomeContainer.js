import React from 'react';
import HomePresenter from './HomePresenter';
import { moviesApi } from 'api';

export default class extends React.Component {
    state = {
        nowPlaying: null,
        upcoming: null,
        popluar: null,
        error: null,
        loading: true,
    };

    async componentDidMount() {
        try {
            const {
                data: { results: nowPlaying },
            } = await moviesApi.nowPlaying();
            const {
                data: { results: upcoming },
            } = await moviesApi.upcoming();
            const {
                data: { results: popluar },
            } = await moviesApi.popluar();

            this.setState({
                nowPlaying,
                upcoming,
                popluar,
            });
        } catch {
            this.setState({
                error: "Can't find movies information.",
            });
        } finally {
            this.setState({
                loading: false,
            });
        }
    }

    render() {
        const { nowPlaying, upcoming, popluar, error, loading } = this.state;
        console.log(this.state);
        return (
            <HomePresenter
                nowPlaying={nowPlaying}
                upcoming={upcoming}
                popluar={popluar}
                error={error}
                loading={loading}
            />
        );
    }
}
