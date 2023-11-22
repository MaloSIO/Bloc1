<?php
$message=$_GET['message']??'Default';
$color=$_GET['color']??'black';
$size=$_GET['size']??'12';
?>
<doctype !HTML>
    <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <title>Font Tester</title>
        </head>
        <body>
            <form>
                <input type="number" name="size">
                <input type="color" name="color">
                <br>
                <br>
                <textarea name="message"></textarea>
                <button type="submit">Submit</button>
            </form>
            <div style="color: <?=$color?>;font-size: <?=$size?>px"><?=$message?></div>
        </body>
    </html>