import React from 'react';
import { Container } from '@mui/system';
import { HomeCard } from '../components/HomeCard';
import { NavBar } from '../components/NavBar';
import { Stack } from '@mui/material';

export const HomePage: React.FC = () => {
    return (
        <>
            <NavBar />
            <Container maxWidth="sm">
                <Stack flexDirection={'row'} mt={6} justifyContent="center">
                    <HomeCard />
                </Stack>
            </Container>
        </>
    );
};
