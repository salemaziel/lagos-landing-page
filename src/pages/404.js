import React from "react";

import Layout from "../components/layout/Layout";

import { GatsbySeo } from "gatsby-plugin-next-seo"

const NotFoundPage = () => (
  <Layout hideFooter hideHeader>
    <GatsbySeo title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
