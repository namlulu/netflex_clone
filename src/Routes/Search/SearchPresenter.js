import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Section from 'Components/Section';
import Message from 'Components/Message';
import Poster from 'Components/Poster';

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
        <Form onSubmit={handleSubmit}>
            <Input
                placeholder="Search Movies or TV Shows..."
                value={searchTerm}
                onChange={updateTerm}
            />
        </Form>
        {loading ? (
            <Loader></Loader>
        ) : (
            <>
                {movieResults && movieResults.length > 0 && (
                    <Section title="Movie Results">
                        {movieResults.map((movie) => (
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
                {tvResults && tvResults.length > 0 && (
                    <Section title="TV Show Results">
                        {tvResults.map((show) => {
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
