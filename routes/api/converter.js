const express = require("express");
const router = express.Router();

// Longueur: Conversion de pieds à mètres et mètres à pieds
router.post("/longueur/pieds-en-metres", (req, res) => {
  const { valeur } = req.body;
  if (valeur && !isNaN(valeur)) {
    const metres = parseFloat(valeur) * 0.3048;
    res.send(`Valeur convertie: ${metres} mètres.`);
  } else {
    res.status(400).send("Entrée invalide.");
  }
});

router.post("/longueur/metres-en-pieds", (req, res) => {
  const { valeur } = req.body;
  if (valeur && !isNaN(valeur)) {
    const pieds = parseFloat(valeur) / 0.3048;
    res.send(`Valeur convertie: ${pieds} pieds.`);
  } else {
    res.status(400).send("Entrée invalide.");
  }
});

// Masse: Conversion de kilogrammes à livres et livres à kilogrammes
router.post("/masse/kilogrammes-en-livres", (req, res) => {
  const { valeur } = req.body;
  if (valeur && !isNaN(valeur)) {
    const livres = parseFloat(valeur) * 2.20462;
    res.send(`Valeur convertie: ${livres} livres.`);
  } else {
    res.status(400).send("Entrée invalide.");
  }
});

router.post("/masse/livres-en-kilogrammes", (req, res) => {
  const { valeur } = req.body;
  if (valeur && !isNaN(valeur)) {
    const kilogrammes = parseFloat(valeur) / 2.20462;
    res.send(`Valeur convertie: ${kilogrammes} kilogrammes.`);
  } else {
    res.status(400).send("Entrée invalide.");
  }
});

// Température: Conversion de Celsius à Fahrenheit et Fahrenheit à Celsius
router.post("/temperature/celsius-en-fahrenheit", (req, res) => {
  const { valeur } = req.body;
  if (valeur && !isNaN(valeur)) {
    const fahrenheit = (parseFloat(valeur) * 9) / 5 + 32;
    res.send(`Valeur convertie: ${fahrenheit} °F.`);
  } else {
    res.status(400).send("Entrée invalide.");
  }
});

router.post("/temperature/fahrenheit-en-celsius", (req, res) => {
  const { valeur } = req.body;
  if (valeur && !isNaN(valeur)) {
    const celsius = ((parseFloat(valeur) - 32) * 5) / 9;
    res.send(`Valeur convertie: ${celsius} °C.`);
  } else {
    res.status(400).send("Entrée invalide.");
  }
});

// Vitesse: Conversion de kilomètres par heure à miles par heure et miles par heure à kilomètres par heure
router.post("/vitesse/kilometres-par-heure-en-miles-par-heure", (req, res) => {
  const { valeur } = req.body;
  if (valeur && !isNaN(valeur)) {
    const mph = parseFloat(valeur) * 0.621371;
    res.send(`Valeur convertie: ${mph} mph.`);
  } else {
    res.status(400).send("Entrée invalide.");
  }
});

router.post("/vitesse/miles-par-heure-en-kilometres-par-heure", (req, res) => {
  const { valeur } = req.body;
  if (valeur && !isNaN(valeur)) {
    const kmph = parseFloat(valeur) / 0.621371;
    res.send(`Valeur convertie: ${kmph} km/h.`);
  } else {
    res.status(400).send("Entrée invalide.");
  }
});

// Volume: Conversion de litres à gallons et gallons à litres
router.post("/volume/litres-en-gallons", (req, res) => {
  const { valeur } = req.body;
  if (valeur && !isNaN(valeur)) {
    const gallons = parseFloat(valeur) * 0.264172;
    res.send(`Valeur convertie: ${gallons} gallons.`);
  } else {
    res.status(400).send("Entrée invalide.");
  }
});

router.post("/volume/gallons-en-litres", (req, res) => {
  const { valeur } = req.body;
  if (valeur && !isNaN(valeur)) {
    const litres = parseFloat(valeur) / 0.264172;
    res.send(`Valeur convertie: ${litres} litres.`);
  } else {
    res.status(400).send("Entrée invalide.");
  }
});

router.all("/*", (req, res) => {
  res.status(404).send("La route n'existe pas!");
});

module.exports = router;
