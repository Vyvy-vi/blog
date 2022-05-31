import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Nav = () => {
  const data = useStaticQuery(graphql`
    query NavQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author;
  const social = data.site.siteMetadata?.social;
  return "";
};

export default Nav;
