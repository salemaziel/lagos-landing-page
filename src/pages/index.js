import React from 'react';

import Layout from '../components/layout/Layout';


import LandingPage from "../components/PageComponents/Home/LandingPage"

import { GatsbySeo } from "gatsby-plugin-next-seo"


const Index = () => (
  <Layout > 
   <GatsbySeo title="Request A Quote" />
    <LandingPage />

  </Layout>
);

export default Index