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
            <ul>
                <li>
                    <a href="?color=red&size=15&message=hello">1</a>
                </li>
                <li>
                    <a href="?color=green&size=20&message=hello???">2</a>
                </li>
                <li>
                    <a href="?color=blue&size=25&message=HELLO????">3</a>
                </li>
            </ul>
            <div style="color: <?=$color?>;font-size: <?=$size?>px"><?=$message?></div>
        </body>
    </html>