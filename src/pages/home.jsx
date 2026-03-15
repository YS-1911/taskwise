import React from 'react';
// nav
import Nav from '../assets/components/nav.jsx'
// hero
import Hero from '../assets/components/hero'
// features_home
import FeaturesHome from '../assets/components/features_home'
// features_home_component
import HomeFeatureComponent from "../assets/components/home_feature_component.jsx"
// testimonial
import Testimonial from '../assets/components/Testimonial'
// Integrations
import Integrations from '../assets/components/Integrations'
const Home = () => {
    return (
        <div>
            {/*------------- nav ---------- */}
            <Nav />
            {/*  ----------- hero ---------- */}
            <Hero />
            {/*  ----------- features ---------- */}
            <FeaturesHome />
            {/*  ----------- home features component ---------- */}
            <HomeFeatureComponent />
            {/*  ----------- testimonial ---------- */}
            <Testimonial />
            {/*  ----------- integrations ---------- */}
            <Integrations />
        </div>
    );
}

export default Home;
