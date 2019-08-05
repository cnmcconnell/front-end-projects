<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/project-list">

<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Home</title>

  <link rel="stylesheet" href="css/stylesheet.css">
  <link rel="stylesheet" href="css/reset.css">

</head>

<body>

  <div class="container" data-type="other">

    <div class="nav">


      <div> <a class="home" href="index.html"> <img src="images/home.svg" style="height: 2rem;"> </a></div>
      <div> <a href="projects.html"> Projects </a></div>
      <div class="before"> <a href="contactme.html"> Contact Me </a></div>
      <div class="after"> <a href="contactme.html"> Contact </a></div>
      <div class="before"> <a href="aboutme.html"> About Me </a></div>
      <div class="after"> <a href="aboutme.html"> About </a></div>
      <div> <a href="blog.html"> Blog </a></div>
      <div class="nav-triangle"></div>


    </div>

    <div class="title">

      <div class="name">
        <div class="top"> My </div>
        <div class="bottom"> Projects </div>

      </div>

    </div>


    <div class="triangles">
      <div class="triangle-one"></div>
      <div class="triangle-content"><xsl:for-each select="project">
        <div class="original">
          <div> <xsl:value-of select="image" /> Content Here </div>
          <div> <xsl:value-of select="image" />Content Here </div>
          <div> <xsl:value-of select="image" />Content Here </div>
          <div> <xsl:value-of select="image" /> Content Here </div>
        </div>
        <div class="extra">
          <div> Content Here </div>
          <div> Content Here </div>
          <div> Content Here </div>
          <div> Content Here </div>
        </div>
        </xsl:for-each>
      </div>

      <div class="triangle-two">
        <div class="see-more"> <img src="images/forward.svg"> </div>
      </div>
      <div class="triangle-three"></div>
    </div>


  </div>

  <script>
    let expanded = false;

    function toggleExpand() {
      expanded = !expanded;
      document.querySelector('.triangle-content').setAttribute('data-expanded', expanded ? true : false);
      document.querySelector('.triangle-two').setAttribute('data-expanded', expanded ? true : false);
      document.querySelector('.triangle-three').setAttribute('data-expanded', expanded ? true : false);
      document.querySelector('.see-more').setAttribute('data-expanded', expanded ? true : false);
      console.log('hi, ily Christina');

      let extraElements = document.getElementsByClassName('extra');
      for (let i = 0; i < extraElements.length; i++) {
        extraElements[i].setAttribute('data-show', expanded ? true : false);
      }


    }

    document.querySelector('.see-more').onclick = toggleExpand;
  </script>
</body>

</html>

</xsl:template>
</xsl:stylesheet>
