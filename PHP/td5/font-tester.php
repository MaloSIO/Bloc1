<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Display Variables</title>
    <style>
        #displayDiv {
            margin-top: 20px;
            padding: 10px;
            border: 1px solid #ccc;
            display: inline-block;
        }
    </style>
</head>
<body>

<?php
// Initialiser les valeurs par défaut ou à partir de la requête
$message = isset($_GET['message']) ? $_GET['message'] : 'Hello, World!';
$font = isset($_GET['font']) ? $_GET['font'] : 'Arial';
$color = isset($_GET['color']) ? $_GET['color'] : '#000000';

// Liste de polices
$fonts = array(
    'Arial', 'Verdana', 'Helvetica', 'Times New Roman', 'Courier New', 'Georgia',
    'Palatino Linotype', 'Trebuchet MS', 'Book Antiqua', 'Impact', 'Tahoma',
    'Geneva', 'Comic Sans MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Arial Black',
    'Gadget', 'MS Sans Serif', 'MS Serif'
);
?>

<form>
    <label for="message">Message:</label>
    <input type="text" id="message" name="message" value="<?php echo $message; ?>">
    <br>
    <br>
    <label for="font">Font:</label>
    <select id="font" name="font">
        <?php
        foreach ($fonts as $fontOption) {
            echo "<option value=\"$fontOption\"";
            if ($fontOption == $font) {
                echo " selected";
            }
            echo ">$fontOption</option>";
        }
        ?>
    </select>
    <br>
    <br>
    <label for="color">Color:</label>
    <input type="color" id="color" name="color" value="<?php echo $color; ?>">
    <br>
    <br>
    <button type="button" onclick="updateDisplay()">Update Display</button>
</form>

<div id="displayDiv" style="font-family: <?php echo $font; ?>;
            color: <?php echo $color; ?>;">
    <?php echo $message; ?>
</div>

<script>
    function updateDisplay() {
        // Mettre à jour l'aperçu en direct
        var message = document.getElementById('message').value;
        var font = document.getElementById('font').value;
        var color = document.getElementById('color').value;

        var displayDiv = document.getElementById('displayDiv');
        displayDiv.innerHTML = message;
        displayDiv.style.fontFamily = font;
        displayDiv.style.color = color;
    }
</script>
</body>
</html>