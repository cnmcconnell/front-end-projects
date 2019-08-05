<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/contact-list">
    <html>
      <body>
        <xsl:for-each select="contact">
          <div><xsl:value-of select="title" /></div>
          <div><xsl:value-of select="name" /></div>
          <div><xsl:value-of select="email" /></div>
          <div><xsl:value-of select="phone" /></div>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
