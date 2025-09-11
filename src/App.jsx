import React from 'react'
// style.css
import "./assets/css/style.css"
// nav
import Nav from './assets/components/nav'
// hero
import Hero from './assets/components/hero'
// features_home
import FeaturesHome from './assets/components/features_home'
// features_home_component
import HomeFeatureComponent from "./assets/components/home_feature_component.jsx"
// testimonial
import Testimonial from './assets/components/Testimonial'
function App() {

  return (
    <>
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
    </>
  )
}

export default App
