import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Section from 'Components/Section';
import Loader from 'Components/Loader';
import Message from 'Components/Message';
import Poster from 'Components/Poster';

const Container = styled.div`
    padding: 0 20px;
`;

const TVPresenter = ({ topRated, popluar, airingToday, loading, error }) => (
    <>
        <Helmet>
            <title>TV shows | namluluflex</title>
        </Helmet>
        {loading ? (
            <Loader></Loader>
        ) : (
            <Container>
                {topRated && topRated.length > 0 && (
                    <Section title="Top Rated Shows">
                        {topRated.map((show) => {
                            return (
                                <Poster
                                    key={show.id}
                                    id={show.id}
                                    title={show.original_name}
                                    imageUrl={show.poster_path}
                                    rating={show.vote_average}
                                    year={
                                        show.first_air_date &&
                                        show.first_air_date.substring(0, 4)
                                    }
                                />
                            );
                        })}
                    </Section>
                )}
                {popluar && popluar.length > 0 && (
                    <Section title="Popluar Shows">
                        {popluar.map((show) => {
                            return (
                                <Poster
                                    key={show.id}
                                    id={show.id}
                                    title={show.original_name}
                                    imageUrl={show.poster_path}
                                    rating={show.vote_average}
                                    year={
                                        show.first_air_date &&
                                        show.first_air_date.substring(0, 4)
                                    }
                                />
                            );
                        })}
                    </Section>
                )}
                {airingToday && airingToday.length > 0 && (
                    <Section title="Airing Today Shows">
                        {airingToday.map((show) => {
                            return (
                                <Poster
                                    key={show.id}
                                    id={show.id}
                                    title={show.original_name}
                                    imageUrl={show.poster_path}
                                    rating={show.vote_average}
                                    year={
                                        show.first_air_date &&
                                        show.first_air_date.substring(0, 4)
                                    }
                                />
                            );
                        })}
                    </Section>
                )}
                {error && <Message color="#e74c3c" text={error} />}
            </Container>
        )}
    </>
);

TVPresenter.propTypes = {
    topRated: propTypes.array,
    popluar: propTypes.array,
    airingToday: propTypes.array,
    loading: propTypes.bool.isRequired,
    error: propTypes.string,
};

export default TVPresenter;
