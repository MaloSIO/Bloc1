<?php
    $message=$_GET['message']??"Message par défaut";
    $nb=$_GET['nb']??1;
    $i=0;
    while($i<$nb){
        echo "<h1>$message</h1>";
        $i++;
    }?>
<ul>
    <li>
        <a href= "?message=Hola">Salut en espagnol</a>
    </li>
    <li>
        <a href="?message=Salut">Salut en français</a>
    </li>
    <li>
        <a href= "?message=Hello">Salut en anglais</a>
    </li>
    <li>
        <a href= "?message=Ciao">Salut en italien</a>
    </li>
    
</ul>