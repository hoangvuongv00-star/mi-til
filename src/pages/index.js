import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/button";

function IndexPage({ location }) {
  const siteTitle = "Today I Learned";

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" keywords={[`post`, `gatsby`, `javascript`, `react`]} />
      <div style={{ textAlign: "center" }}>
        <img
          style={{ margin: 0, width: "50%", borderRadius: "50%" }}
          src="./avatar.png"
          alt="avatar"
        />
      </div>
      <h1>
        Hey there{" "}
        <span role="img" aria-label="wave emoji">
          👋
        </span>
      </h1>
      <p>Nguyen Le Anh Thu</p>
      <p>
        Mi mup edit o day nek
      </p>
      <Link to="/post/">
        <Button marginTop="35px">See all Posts</Button>
      </Link>
    </Layout>
  );
}

export default IndexPage;
