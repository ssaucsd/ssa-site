import React from "react";
import type { PageMetaData } from "./pageMetaMap";

// must contain an element with id="root"
const PageTemplate: React.FC<PageMetaData> = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  ogType,
}) => {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}

        {/* Open Graph / Facebook */}
        {ogType && <meta property="og:type" content={ogType} />}
        {ogUrl && <meta property="og:url" content={ogUrl} />}
        {ogTitle && <meta property="og:title" content={ogTitle} />}
        {ogDescription && (
          <meta property="og:description" content={ogDescription} />
        )}
        {ogImage && <meta property="og:image" content={ogImage} />}

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        {ogUrl && <meta property="twitter:url" content={ogUrl} />}
        {ogTitle && <meta property="twitter:title" content={ogTitle} />}
        {ogDescription && (
          <meta property="twitter:description" content={ogDescription} />
        )}
        {ogImage && <meta property="twitter:image" content={ogImage} />}
      </head>
      <body>
        <div id="root"></div>
      </body>
    </html>
  );
};

export default PageTemplate;
