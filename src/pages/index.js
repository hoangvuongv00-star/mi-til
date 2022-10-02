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
        Hi, welcome to my blog
        <span role="img" aria-label="wave emoji">
        
       
      </h1>
      <p>My name is Thu, but you can call me Letter.</p>
      <p>It's a direct translation from my Vietnamese name. </p>
       <p>I'm not special, i'm extremely average </p>
      <p>Fish can swim, i as a human can not</p>
 <p>Fish can climb trees, i as a human can</p>

 <p>Fish can fly, i as a human can but with support</p>

 <p>So cat is the mighty, but fish!</p>

 <p>Even though they love water, but its the water itself that creates the illusion of fish can not do anything but swim. That’s not true and i am here to prove it</p>

 <p>I am a fish that can climb trees & hope to fly by itself one day!</p>
   
      <Link to="/post/">
        <Button marginTop="35px">See all Posts</Button>
      </Link>
    </Layout>
  );
}

export default IndexPage;
