<?php
include 'config.php';

// Récupération des images du dossier "planches"
$planches = glob('planches/*.jpg');
usort($planches, function($a, $b) {
    return filemtime($b) - filemtime($a);
});

// Chargement du journal de production
$journal = json_decode(file_get_contents('journal.json'), true);
?>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Atelier BD - Work in Progress</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
  <div class="left">
    <h1>Les planches de ma prochaine BD<br><span>Work in Progress</span></h1>
    <div class="planches">
      <?php foreach($planches as $img): ?>
        <div class="vignette">
          <img src="<?= $img ?>" alt="">
        </div>
      <?php endforeach; ?>
    </div>
  </div>

  <div class="right">
    <h2>Journal de production</h2>
    <?php foreach($journal as $entry): ?>
      <div class="journal-entry">
        <img src="<?= $entry['image'] ?>" alt="">
        <div class="text">
          <h3><?= $entry['date'] ?></h3>
          <p><?= $entry['texte'] ?></p>
        </div>
      </div>
    <?php endforeach; ?>
  </div>
</div>

</body>
</html>
