import React from 'react';
import Layout from '../../components/Layout';

const CycleSearch = () => (
    <Layout routeClass="cycle-search">
        <h3>Cycle Search</h3>
        <p>Use the form below to search locations for boris bikes.</p>
        <form>
            <input type="text" />
            <button>Search</button>
        </form>
    </Layout>
);

export default CycleSearch;
