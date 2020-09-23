import React from 'react';
import TVPresenter from './TVPresenter';

export default class extends React.Component {
    state = {
        topRated: null,
        popluar: null,
        airingToday: null,
        loading: true,
        error: null,
    };

    render() {
        const { topRated, popluar, airingToday, loading, error } = this.state;
        return <TVPresenter topRated={topRated} popluar={popluar} airingToday={airingToday} loading={loading} error={error} />;
    }
}
