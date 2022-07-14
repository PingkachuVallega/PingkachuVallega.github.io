<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>dwqdwqdwqdwd</h1>
</body>
<script>
    let file = "fetch_info.json";
    fetch (file)
        .then(x => x.text())
        .then(y => document.getElementById("h1").innerHTML = y);
</script>
</html>