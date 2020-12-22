const changeThings = (color, delay) => {
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      // console.log('The Interval');

      document.querySelector('.container').innerHTML = `<p>Hello</p>`;

            // alert('Hello')
            document.body.style.background = color
            resolve();
          }, delay);

          const btn = document.querySelector('button');
   btn.addEventListener('click', () => {
     setTimeout(() => {
       clearInterval(interval)
       console.log('Interval Over');
     }, 200)
   })
 })
}
