import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Section from 'Components/Section';
import Loader from 'Components/Loader';
import Message from 'Components/Message';

const Container = styled.div`
    padding: 0px 20px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popluar, loading, error }) =>
    loading ? (
        <Loader></Loader>
    ) : (
        <Container>
            {nowPlaying && nowPlaying.length > 0 && (
                <Section title="Now Playing">
                    {nowPlaying.map((movie) => (
                        <span key={movie.id}>{movie.title}</span>
                    ))}
                </Section>
            )}
            {upcoming && upcoming.length > 0 && (
                <Section title="upcoming Movies">
                    {upcoming.map((movie) => (
                        <span key={movie.id}>{movie.title}</span>
                    ))}
                </Section>
            )}
            {popluar && popluar.length > 0 && (
                <Section title="Popular Moives">
                    {popluar.map((movie) => (
                        <span key={movie.id}>{movie.title}</span>
                    ))}
                </Section>
            )}
            {error && <Message color="#e74c3c" text={error} />}
        </Container>
    );

HomePresenter.propTypes = {
    nowPlaying: propTypes.array,
    upComing: propTypes.array,
    popluar: propTypes.array,
    loading: propTypes.bool.isRequired,
    error: propTypes.string,
};

export default HomePresenter;
