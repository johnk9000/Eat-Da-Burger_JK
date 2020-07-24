module.exports = function(body){
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Eat da Burger JK</title>
    <script src="https://code.jquery.com/jquery.js"></script>
  </head>
  <style>
    html, body {
        background: linear-gradient(hsla(25, 100%, 25%, 1), hsla(25, 100%, 15%, 1));
        color: white;
        justify-content: center;
    }

    card {
        margin: 40px;
        padding: 80px;
        border-radius: 10px;
        color: #333 !important;
        background-color: hsla(0, 100%, 100%, 0.35);
        backdrop-filter: blur(15px); 
    }

    card > button {
        color: white;
        text-align: center;
        margin: 10px 20px;
        padding: 20px;
        border-radius: 10px;
        background-color: hsla(217, 40%, 20%, 1);
    }

    .container {
        display: flex;
        flex: 100%;
        width: 100%;
        flex-direction: column;
        align-content: center;
    }
    


    .container > button:hover {
        font-weight: 600;
        background-color: hsla(217, 30%, 80%, 1);
    }
    
  </style>
  <body>
  <header>
  <img src="https://img.icons8.com/ios/100/000000/crane.png"/>
  <img src="https://img.icons8.com/wired/64/000000/hamburger.png"/>
  <img src="https://img.icons8.com/ios/100/000000/sts-crane.png"/>
  </header>
    ${ body }
  </body>
  </html>
  `
  }