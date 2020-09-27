import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Section from 'Components/Section';
import Loader from 'Components/Loader';
import Message from 'Components/Message';

const Container = styled.div`
    padding: 0 20px;
`;

const TVPresenter = ({ topRated, popluar, airingToday, loading, error }) =>
    loading ? (
        <Loader></Loader>
    ) : (
        <Container>
            {topRated && topRated.length > 0 && (
                <Section title="Top Rated Shows">
                    {topRated.map((show) => show.name)}
                </Section>
            )}
            {popluar && popluar.length > 0 && (
                <Section title="Popluar Shows">
                    {popluar.map((show) => show.name)}
                </Section>
            )}
            {airingToday && airingToday.length > 0 && (
                <Section title="Airing Today Shows">
                    {airingToday.map((show) => show.name)}
                </Section>
            )}
            {error && <Message color="#e74c3c" text={error} />}
        </Container>
    );

TVPresenter.propTypes = {
    topRated: propTypes.array,
    popluar: propTypes.array,
    airingToday: propTypes.array,
    loading: propTypes.bool.isRequired,
    error: propTypes.string,
};

export default TVPresenter;
