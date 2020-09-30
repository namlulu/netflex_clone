import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Section from 'Components/Section';
import Loader from 'Components/Loader';
import Message from 'Components/Message';
import Poster from 'Components/Poster';

const Container = styled.div`
    padding: 20px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popluar, loading, error }) => (
    <>
        <Helmet>
            <title>Movies | Namluluflex</title>
        </Helmet>
        {loading ? (
            <Loader></Loader>
        ) : (
            <Container>
                {nowPlaying && nowPlaying.length > 0 && (
                    <Section title="Now Playing">
                        {nowPlaying.map((movie) => {
                            return (
                                <Poster
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.original_title}
                                    imageUrl={movie.poster_path}
                                    rating={movie.vote_average}
                                    year={
                                        movie.release_date &&
                                        movie.release_date.substring(0, 4)
                                    }
                                    isMovie={true}
                                />
                            );
                        })}
                    </Section>
                )}
                {upcoming && upcoming.length > 0 && (
                    <Section title="Upcoming Movies">
                        {upcoming.map((movie) => (
                            <Poster
                                key={movie.id}
                                id={movie.id}
                                title={movie.original_title}
                                imageUrl={movie.poster_path}
                                rating={movie.vote_average}
                                year={
                                    movie.release_date &&
                                    movie.release_date.substring(0, 4)
                                }
                                isMovie={true}
                            />
                        ))}
                    </Section>
                )}
                {popluar && popluar.length > 0 && (
                    <Section title="Popular Moives">
                        {popluar.map((movie) => (
                            <Poster
                                key={movie.id}
                                id={movie.id}
                                title={movie.original_title}
                                imageUrl={movie.poster_path}
                                rating={movie.vote_average}
                                year={
                                    movie.release_date &&
                                    movie.release_date.substring(0, 4)
                                }
                                isMovie={true}
                            />
                        ))}
                    </Section>
                )}
                {error && <Message color="#e74c3c" text={error} />}
            </Container>
        )}
    </>
);

HomePresenter.propTypes = {
    nowPlaying: propTypes.array,
    upComing: propTypes.array,
    popluar: propTypes.array,
    loading: propTypes.bool.isRequired,
    error: propTypes.string,
};

export default HomePresenter;
