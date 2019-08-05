<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/contact-list">

    <html>
      <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="author" content="Christina McConnell"/>
        <meta name="description" content= "Boondock Bill's is a contemporary bar offering a variety of midwestern cuisine and drinks. Find out how to reach us and visit today!"/>
        <title> Contact Us </title>


            <link rel="stylesheet" type="text/css" href="css/stylesheet.css"/>
        <link rel="stylesheet" type="text/css" href="css/jcarousel.basic.css"/>


      </head>

      <body>
        <div class="aboutcontainer">

        <div class="header">
          <img class="logo" src="images/BBs-logo.svg" />
          <div class="title">

            <a href="index.php"> Boondock Bill's </a>
          </div>
          </div>

          <div class="nav">
            <div class="button"> <a href="aboutus.php"> About Us </a> </div>
            <div class="button"> <a href="food.php"> Food </a> </div>
            <div class="button"> <a href="drinks.php"> Drinks </a> </div>
            <div class="button"> <a href="contact.xml"> Contact Us </a> </div>
          </div>

          <div class="filler">
            <div>
             <div id="welcomeback"></div>
          </div>
          </div>

            <div class="catchphrase">
            <div> GET </div>
            <div> IN </div>
            <div> TOUCH </div>
          </div>



        <div class="content contactus">
          <h4> Contact </h4>
          <div> Store number: (321)315-2064 </div>
              <div>

                <div class="contacts"><xsl:for-each select="contact">
                  <div class="contact">
                  <p><xsl:value-of select="title" /></p>
                  <p><xsl:value-of select="name" /></p>
                  <p><xsl:value-of select="email" /></p>
                  <p><xsl:value-of select="phone" /></p></div>
                </xsl:for-each></div>
              </div>
              <h4> Hours </h4>
              <div>

                <p> Monday-Wednesday: 11am-12am | </p>
                <p> Friday-Saturday: 11am-2am | </p>
                <p>  Sunday: 2pm-12am </p>
                </div>
                <h4> Location </h4>
                <div>

                  <p> 97 E Pine St, Orlando, FL 32801 </p>

                </div>
                <a href="https://www.google.com/maps/dir//67+E+Pine+St,+Orlando,+FL+32801/@28.5702939,-81.2353609,15z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x88e77afdce237885:0x7539dcf33439866f!2m2!1d-81.3776584!2d28.5415028">
                  <div class="directions">
                    Get Directions
                  </div>
                </a>

            </div>

          <div class="contactimage">

        </div>





    <div class="footer">
      <div>
        <!--#config timefmt="%A %B %d %Y" -->
        <!--#echo var="DATE_LOCAL" -->
      </div>
      <div>
    © Christina McConnell
    </div>
    </div>

    </div>




    <script type="text/javascript" src="scripts/jquery.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>



    <script>
    /** cookie **/
    function getCookie(name) {
      var value = "; " + document.cookie;
      var parts = value.split("; " + name + "=");
      if (parts.length == 2) return parts.pop().split(";").shift();
    }

    if (!getCookie(`username`))
    {
      swal("Hello!", "What's your name?", {
        content: "input",
      })
      .then((value) => {
        swal(`Hello, ${value}!`);
        document.cookie=`username=${value}`;
      });
    }

    else {
      $("#welcomeback").text(`Welcome back, ${getCookie('username')}!`)
    }


    </script>


      </body>

      </html>

  </xsl:template>
</xsl:stylesheet>
