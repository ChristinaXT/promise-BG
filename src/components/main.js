const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <title>A Rainbow World</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <h1>A Rainbow World</h1>

  <button>Stop Color Change</button>
  <div class="container">

  </div>

  <script>
  const changeThings = (color, delay) => {
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        // console.log('The Interval');

        // document.querySelector('.container').innerHTML = '<p>Hello</p>'
        document.querySelector('.container').innerHTML = '<a href="/things" target="_blank">Things Database</a>'

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

    const myShow = async () => {
    await changeThings('skyblue', 500);
    await changeThings('indigo', 1000);
    await changeThings('orange', 1000);
    }

    myShow();
  </script>
  

</body>
</html>`;

module.exports = html;
