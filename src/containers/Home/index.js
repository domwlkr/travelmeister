import React from 'react';
import List from '../../components/List';
import IconLink from '../../components/IconLink';
import GeoLocator from '../../components/GeoLocator';

const Home = () => (
    <div className="main">
        <GeoLocator />

        <List>
            <IconLink text="Underground" link="/underground" />
            <IconLink text="Overground" link="/overground" />
            <IconLink text="DLR" link="/dlr" />
        </List>
    </div>
);

export default Home;
