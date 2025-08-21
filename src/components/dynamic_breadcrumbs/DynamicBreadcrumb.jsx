import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./dynamic-breadcrumbs.css";

export const DynamicBreadcrumb = () => {
  const location = useLocation();

  const breadcrumbsWithoutSlash = location.pathname.split("/").filter((x) => x);
  const finalBreadcrumbs = breadcrumbsWithoutSlash.map(x => x.split("-").map(path => path.charAt(0).toUpperCase() + path.slice(1)).join(" "));
  
  return (
    <nav className="breadcrumb-container">
      {
        finalBreadcrumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            {
              index < finalBreadcrumbs.length - 1 ? (
                <>
                  <Link to={location.pathname.split("/").slice(0, -index).join("/") || "/"} className="breadcrumb-item">{crumb}</Link>
                  <span className="breadcrumb-separator"> <img src="/Gallery/right-arrow.png" alt="" /> </span>
                </>
              ) : (
                <>
                  <span className="breadcrumb-item active">{crumb}</span>
                </>
              )
            }
          </React.Fragment>
        ))
      }
    </nav>
  );
};