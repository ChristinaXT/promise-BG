const changeThings = (color, delay) => {
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      // console.log('The Interval');

      document.querySelector('.container').innerHTML = `<p>Hello</p>`;

            // alert('Hello')
            document.body.style.background = color
            resolve();
          }, delay);
