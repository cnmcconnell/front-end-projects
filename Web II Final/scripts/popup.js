
  // set global variable to handle if popup is up or not
  let popup = true;

  // function to handle the popup action, pass in picture url
  function handlePopup(pic, tinypic, alt) {

    popup = !popup; // invert popup value
    document.querySelector('.popup').setAttribute('data-hidden', popup); // sets popup to true or false
    document.getElementById('popup-pic').setAttribute('src', pic);  // sets the pic content
    document.getElementById('popup-pic').setAttribute('alt', alt);  // sets the pic content
    document.getElementById('popup-pic-sm').setAttribute('srcset', tinypic);  // sets the pic content
  }
