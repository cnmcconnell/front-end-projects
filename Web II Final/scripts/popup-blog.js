
// set global variable to handle if popup is up or not
let popup = true;

const myData = [
  {
    title: 'Maecenas Placerat',
    blog: 'Sed a porttitor diam. Vivamus egestas faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus leo, vulputate eu libero id, iaculis viverra justo. Morbi rutrum pulvinar sem vel molestie. Integer sed pellentesque sem, non pellentesque risus. Nullam accumsan dolor ut dui vestibulum ornare. Quisque massa enim, elementum et dapibus sit amet, pellentesque id tortor. Aenean a eros maximus, viverra dolor nec, hendrerit justo. <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus leo, vulputate eu libero id, iaculis viverra justo. Morbi rutrum pulvinar sem vel molestie. Integer sed pellentesque sem, non pellentesque risus. Nullam accumsan dolor ut dui vestibulum ornare. Quisque massa enim, elementum et dapibus sit amet, pellentesque id tortor. Aenean a eros maximus, viverra dolor nec, hendrerit justo.'
  },
  {
    title: 'Curabitur Commodo Lorem',
    blog: 'Sed a porttitor diam. Vivamus egestas faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus leo, vulputate eu libero id, iaculis viverra justo. Morbi rutrum pulvinar sem vel molestie. Integer sed pellentesque sem, non pellentesque risus. Nullam accumsan dolor ut dui vestibulum ornare. Quisque massa enim, elementum et dapibus sit amet, pellentesque id tortor. Aenean a eros maximus, viverra dolor nec, hendrerit justo. <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus leo, vulputate eu libero id, iaculis viverra justo. Morbi rutrum pulvinar sem vel molestie. Integer sed pellentesque sem, non pellentesque risus. Nullam accumsan dolor ut dui vestibulum ornare. Quisque massa enim, elementum et dapibus sit amet, pellentesque id tortor. Aenean a eros maximus, viverra dolor nec, hendrerit justo.'
  },
  {
    title: 'Maecenas Placerat',
    blog: 'Sed a porttitor diam. Vivamus egestas faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus leo, vulputate eu libero id, iaculis viverra justo. Morbi rutrum pulvinar sem vel molestie. Integer sed pellentesque sem, non pellentesque risus. Nullam accumsan dolor ut dui vestibulum ornare. Quisque massa enim, elementum et dapibus sit amet, pellentesque id tortor. Aenean a eros maximus, viverra dolor nec, hendrerit justo. <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus leo, vulputate eu libero id, iaculis viverra justo. Morbi rutrum pulvinar sem vel molestie. Integer sed pellentesque sem, non pellentesque risus. Nullam accumsan dolor ut dui vestibulum ornare. Quisque massa enim, elementum et dapibus sit amet, pellentesque id tortor. Aenean a eros maximus, viverra dolor nec, hendrerit justo. <br /><br />Curabitur purus leo, vulputate eu libero id, iaculis viverra justo. Morbi rutrum pulvinar sem vel molestie. Integer sed pellentesque sem, non pellentesque risus. Nullam accumsan dolor ut dui vestibulum ornare. Quisque massa enim, elementum et dapibus sit amet, pellentesque id tortor. Aenean a eros maximus, viverra dolor nec, hendrerit justo'
  },
  {
    title: 'Nibh Ullamcorper Facilisis',
    blog: 'Sed a porttitor diam. Vivamus egestas faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus leo, vulputate eu libero id, iaculis viverra justo. Morbi rutrum pulvinar sem vel molestie. Integer sed pellentesque sem, non pellentesque risus. Nullam accumsan dolor ut dui vestibulum ornare. Quisque massa enim, elementum et dapibus sit amet, pellentesque id tortor. Aenean a eros maximus, viverra dolor nec, hendrerit justo. <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus leo, vulputate eu libero id, iaculis viverra justo. Morbi rutrum pulvinar sem vel molestie. Integer sed pellentesque sem, non pellentesque risus. Nullam accumsan dolor ut dui vestibulum ornare. Quisque massa enim, elementum et dapibus sit amet, pellentesque id tortor. Aenean a eros maximus, viverra dolor nec, hendrerit justo.'
  },
  {
    title: 'fdasad',
    blog: 'Sed a porttitor diam. Vivamus egestas faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus leo, vulputate eu libero id, iaculis viverra justo. Morbi rutrum pulvinar sem vel molestie. Integer sed pellentesque sem, non pellentesque risus. Nullam accumsan dolor ut dui vestibulum ornare. Quisque massa enim, elementum et dapibus sit amet, pellentesque id tortor. Aenean a eros maximus, viverra dolor nec, hendrerit justo. <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus leo, vulputate eu libero id, iaculis viverra justo. Morbi rutrum pulvinar sem vel molestie. Integer sed pellentesque sem, non pellentesque risus. Nullam accumsan dolor ut dui vestibulum ornare. Quisque massa enim, elementum et dapibus sit amet, pellentesque id tortor. Aenean a eros maximus, viverra dolor nec, hendrerit justo.'
  }
]

// function to handle the popup action, pass in picture url
function handlePopup(id) {
  popup = !popup; // invert popup value
  document.querySelector('.popup').setAttribute('data-hidden', popup); // sets popup to true or false
  document.getElementById('title').innerHTML = myData[id].title;  // sets the pic content
  document.getElementById('blog').innerHTML = myData[id].blog;
}
