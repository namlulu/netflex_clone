import React from 'react';
import DetailPresenter from './DetailPresenter';
import { moviesApi } from 'api';
import { tvApi } from '../../api';

export default class extends React.Component {
    constructor(props) {
        super(props);
        const {
            location: { pathname },
        } = props;
        this.state = {
            result: null,
            error: null,
            loading: true,
            isMovie: pathname.includes('/movie/'),
        };
    }

    async componentDidMount() {
        const {
            match: {
                params: { id },
            },
            history: { push },
        } = this.props;
        const { isMovie } = this.state;
        const parsedId = parseInt(id);
        if (isNaN(parsedId)) {
            return push('/');
        }
        let result = null;

        try {
            if (isMovie) {
                const { data } = await moviesApi.movieDetail(parsedId);
                result = data;
            } else {
                const { data } = await tvApi.showDetail(parsedId);
                result = data;
            }
            console.log(result);
        } catch {
            this.setState({ error: "can't find anything." });
        } finally {
            this.setState({
                loading: false,
                result,
            });
        }
    }

    render() {
        const { result, error, loading } = this.state;
        return <DetailPresenter result={result} error={error} loading={loading} />;
    }
}
