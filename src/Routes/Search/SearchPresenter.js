import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Section from 'Components/Section';
import Message from 'Components/Message';

const Container = styled.div`
    padding: 0px 20px;
`;

const Form = styled.form`
    margin-bottom: 50px;
    width: 100%;
`;

const Input = styled.input`
    all: unset;
    font-size: 28px;
    width: 100%;
`;

const SearchPresenter = ({
    movieResults,
    tvResults,
    searchTerm,
    loading,
    error,
    handleSubmit,
    updateTerm,
}) => (
    <Container>
        <Form onSubmit={handleSubmit} onChange={updateTerm}>
            <Input
                placeholder="Search Movies or TV Shows..."
                value={searchTerm}
            />
        </Form>
        {loading ? (
            <Loader></Loader>
        ) : (
            <>
                {movieResults && movieResults.length > 0 && (
                    <Section title="Movie Results">
                        {movieResults.map((movie) => (
                            <span key={movie.id}>{movie.title}</span>
                        ))}
                    </Section>
                )}
                {tvResults && tvResults.length > 0 && (
                    <Section title="TV Show Results">
                        {tvResults.map((show) => (
                            <span key={show.id}>{show.name}</span>
                        ))}
                    </Section>
                )}
            </>
        )}
        {error && <Message color="#e74c3c" text={error} />}
        {tvResults &&
            movieResults &&
            tvResults.length === 0 &&
            movieResults.length === 0 && (
                <Message text="Nothing Found" color="grey"></Message>
            )}
    </Container>
);

SearchPresenter.propTypes = {
    movieResults: propTypes.array,
    tvResults: propTypes.array,
    searchTerm: propTypes.string,
    loading: propTypes.bool.isRequired,
    error: propTypes.string,
    handleSubmit: propTypes.func.isRequired,
    updateTerm: propTypes.func.isRequired,
};

export default SearchPresenter;
