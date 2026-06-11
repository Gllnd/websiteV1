export default {
  async fetch(request) {
    return new Response(`
<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hallo Wereld</title>
  <style>
    body {
      font-family: sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background: #f0f4f8;
    }
    h1 {
      font-size: 3rem;
      color: #1a1a2e;
    }
  </style>
</head>
<body>
  <h1>Hallo Wereld!</h1>
</body>
</html>
    `, {
      headers: { "Content-Type": "text/html;charset=UTF-8" }
    });
  }
};
