import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

const Layout = ({ location, children, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  const data = useStaticQuery(graphql`
    query CopyrighQuery {
      site {
        siteMetadata {
          author {
            name
          }
          blogEpoch
        }
      }
    }
  `);
  const author = data.site.siteMetadata?.author?.name || "Anonymous";
  const blogEpoch = new Date(data.site.siteMetadata?.blogEpoch);

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    );
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    );
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        &copy; {blogEpoch.getFullYear()}
        {new Date().getFullYear() > blogEpoch.getFullYear()
          ? `-${new Date().getFullYear()}`
          : ""}
        , {author}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
