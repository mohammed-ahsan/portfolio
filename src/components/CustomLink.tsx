import React from 'react'
import type { LinkProps } from "react-router-dom";
import {Link,useMatch,useResolvedPath,} from "react-router-dom"

function CustomLink({ children, to, ...props }: LinkProps) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{color: match ? "#e5dcc2" : "#fff", textTransform:match ? "uppercase":"capitalize",textDecorationLine:match ? "underline":"none"}}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }

export default CustomLink