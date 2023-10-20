const request = require("supertest");
const express = require("express");
const router = require("../routes/api/converter"); // Ajustez le chemin selon la structure de votre projet

const app = express();
app.use(express.json());
app.use("/api/converter", router);

describe("Conversion API", () => {
  test("Convertir pieds en mètres", async () => {
    const response = await request(app)
      .post("/api/converter/longueur/pieds-en-metres")
      .send({ valeur: 10 });
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Valeur convertie: 3.0480 mètres.");
  });

  test("Convertir mètres en pieds", async () => {
    const response = await request(app)
      .post("/api/converter/longueur/metres-en-pieds")
      .send({ valeur: 10 });
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Valeur convertie: 32.8084 pieds.");
  });

  test("Convertir kilogrammes en livres", async () => {
    const response = await request(app)
      .post("/api/converter/masse/kilogrammes-en-livres")
      .send({ valeur: 10 });
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Valeur convertie: 22.0462 livres.");
  });

  test("Convertir livres en kilogrammes", async () => {
    const response = await request(app)
      .post("/api/converter/masse/livres-en-kilogrammes")
      .send({ valeur: 10 });
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Valeur convertie: 4.5359 kilogrammes.");
  });

  test("Convertir Celsius en Fahrenheit", async () => {
    const response = await request(app)
      .post("/api/converter/temperature/celsius-en-fahrenheit")
      .send({ valeur: 10 });
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Valeur convertie: 50.0000 °F.");
  });

  test("Convertir Fahrenheit en Celsius", async () => {
    const response = await request(app)
      .post("/api/converter/temperature/fahrenheit-en-celsius")
      .send({ valeur: 50 });
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Valeur convertie: 10.0000 °C.");
  });

  test("Convertir kilomètres par heure en miles par heure", async () => {
    const response = await request(app)
      .post("/api/converter/vitesse/kilometres-par-heure-en-miles-par-heure")
      .send({ valeur: 100 });
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Valeur convertie: 62.1371 mph.");
  });

  test("Convertir miles par heure en kilomètres par heure", async () => {
    const response = await request(app)
      .post("/api/converter/vitesse/miles-par-heure-en-kilometres-par-heure")
      .send({ valeur: 100 });
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Valeur convertie: 160.9344 km/h.");
  });

  test("Convertir litres en gallons", async () => {
    const response = await request(app)
      .post("/api/converter/volume/litres-en-gallons")
      .send({ valeur: 100 });
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Valeur convertie: 26.4172 gallons.");
  });

  test("Convertir gallons en litres", async () => {
    const response = await request(app)
      .post("/api/converter/volume/gallons-en-litres")
      .send({ valeur: 100 });
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Valeur convertie: 378.5413 litres.");
  });
});
