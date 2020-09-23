import React from 'react';
import HomePresenter from './HomePresenter';

export default class extends React.Component {
    state = {
        nowPlaying: null,
        upComing: null,
        popluar: null,
        error: null,
        loading: true,
    };

    render() {
        const { nowPlaying, upComing, popluar, error, loading } = this.state;
        return <HomePresenter nowPlaying={nowPlaying} upComing={upComing} popluar={popluar} error={error} loading={loading} />;
    }
}
