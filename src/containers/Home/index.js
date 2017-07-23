import React from 'react';
import List from '../../components/List';
import IconButton from '../../components/IconButton';
import GeoLocator from '../../components/GeoLocator';

const Home = () => (
    <div className="main">
        <GeoLocator />

        <List>
            <IconButton text="Underground" link="" />
            <IconButton text="Overground" link="" />
            <IconButton text="DLR" link="" />
        </List>
    </div>
);

export default Home;
