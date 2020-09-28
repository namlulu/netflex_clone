import React from 'react';
import { tvApi } from 'api';
import TVPresenter from './TVPresenter';

export default class extends React.Component {
    state = {
        topRated: null,
        popluar: null,
        airingToday: null,
        error: null,
        loading: true,
    };

    async componentDidMount() {
        try {
            const {
                data: { results: topRated },
            } = await tvApi.topRated();
            const {
                data: { results: popluar },
            } = await tvApi.popluar();
            const {
                data: { results: airingToday },
            } = await tvApi.airingToday();
            this.setState({ topRated, popluar, airingToday });
        } catch {
            this.setState({
                error: "can't find tvs information.",
            });
        } finally {
            this.setState({
                loading: false,
            });
        }
    }

    render() {
        const { topRated, popluar, airingToday, loading, error } = this.state;
        return (
            <TVPresenter
                topRated={topRated}
                popluar={popluar}
                airingToday={airingToday}
                loading={loading}
                error={error}
            />
        );
    }
}
