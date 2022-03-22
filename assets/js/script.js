const planets = [
  {
    "Nom": "Paradise",
    "Secteur": "Saturn",
    "Lune_de": "",
    "Type": "Planet",
    "Gravité": 0.9,
    "Diametre": 54.26,
    "Ressource": "Normal",
    "Terrain": "Correct",
    "Atmosphère": "Elevé",
    "Température": "Froid la nuit et tempéré le jour",
    "Position_X": -269911.04,
    "Position_Y": 1815572.19,
    "Position_Z": 3408361.9
  },
  {
    "Nom": "Kor",
    "Secteur": "Saturn",
    "Lune_de": "",
    "Type": "Planet",
    "Gravité": 0.41,
    "Diametre": 98.2,
    "Ressource": "Normal",
    "Terrain": "Accidenté",
    "Atmosphère": "Faible",
    "Température": "Gel",
    "Position_X": -522265.47,
    "Position_Y": 833639.93,
    "Position_Z": 2410713.59
  },
  {
    "Nom": "Takua",
    "Secteur": "Saturn",
    "Lune_de": "",
    "Type": "Planet",
    "Gravité": 1,
    "Diametre": 77.96,
    "Ressource": "Faible",
    "Terrain": "Agréable",
    "Atmosphère": "Elevé",
    "Température": "Froid la nuit et tempéré le jour",
    "Position_X": -1557671.91,
    "Position_Y": 1667086.86,
    "Position_Z": 3372265.62
  },
  {
    "Nom": "Bylen",
    "Secteur": "Bylen",
    "Lune_de": "",
    "Type": "Centre de Secteur",
    "Gravité": 2.4,
    "Diametre": 120,
    "Ressource": "Null",
    "Terrain": "Très dangereux",
    "Atmosphère": "Null",
    "Température": "Gel",
    "Position_X": -8497673.6,
    "Position_Y": 4532158.93,
    "Position_Z": 4205773.38
  },
  {
    "Nom": "Saturn",
    "Secteur": "Saturn",
    "Lune_de": "",
    "Type": "Centre de Secteur",
    "Gravité": 1.3,
    "Diametre": 120,
    "Ressource": "Normal",
    "Terrain": "Accidenté",
    "Atmosphère": "Null",
    "Température": "Gel",
    "Position_X": -799778.08,
    "Position_Y": 1326414.36,
    "Position_Z": 3090168.53
  },
  {
    "Nom": "Pertnam",
    "Secteur": "Bylen",
    "Lune_de": "",
    "Type": "Planet",
    "Gravité": 1.2,
    "Diametre": 104.16,
    "Ressource": "Normal",
    "Terrain": "Correct",
    "Atmosphère": "Faible",
    "Température": "Froid la nuit et tempéré le jour",
    "Position_X": -9233426.21,
    "Position_Y": 4130329.2,
    "Position_Z": 3766429.86
  },
  {
    "Nom": "Jerum",
    "Secteur": "Bylen",
    "Lune_de": "",
    "Type": "Planet",
    "Gravité": 1.3,
    "Diametre": 58.72,
    "Ressource": "Null",
    "Terrain": "Plat",
    "Atmosphère": "Null",
    "Température": "Gel",
    "Position_X": -8889994.08,
    "Position_Y": 4026943.26,
    "Position_Z": 4782262.59
  },
  {
    "Nom": "PT-PT013",
    "Secteur": "Bylen",
    "Lune_de": "",
    "Type": "Planet",
    "Gravité": 1,
    "Diametre": 74.9,
    "Ressource": "Null",
    "Terrain": "Correct",
    "Atmosphère": "Faible / Elevé",
    "Température": "Froid la nuit et tempéré le jour",
    "Position_X": -8177073.88,
    "Position_Y": 5026572.69,
    "Position_Z": 3700870.98
  },
  {
    "Nom": "Caldera",
    "Secteur": "Caldera",
    "Lune_de": "",
    "Type": "Centre de Secteur",
    "Gravité": 1.16,
    "Diametre": 120,
    "Ressource": "Faible",
    "Terrain": "Très dangereux",
    "Atmosphère": "Faible",
    "Température": "Très chaud le jour et très froid la nuit",
    "Position_X": -2577226.5,
    "Position_Y": 8624767.16,
    "Position_Z": 4825778.67
  },
  {
    "Nom": "Ravcor",
    "Secteur": "Caldera",
    "Lune_de": "",
    "Type": "Planet",
    "Gravité": 1,
    "Diametre": 87,
    "Ressource": "Normal",
    "Terrain": "Accidenté",
    "Atmosphère": "Null",
    "Température": "Gel",
    "Position_X": -1875374.43,
    "Position_Y": 9080030.46,
    "Position_Z": 5149259.2
  },
  {
    "Nom": "Murdor",
    "Secteur": "Caldera",
    "Lune_de": "",
    "Type": "Planet",
    "Gravité": 0.78,
    "Diametre": 69.8,
    "Ressource": "Faible",
    "Terrain": "Accidenté",
    "Atmosphère": "Null",
    "Température": "Froid la nuit et tempéré le jour",
    "Position_X": -3551769.82,
    "Position_Y": 8226451.02,
    "Position_Z": 4771115.84
  },
  {
    "Nom": "Black Hole",
    "Secteur": "Black Hole",
    "Lune_de": "",
    "Type": "Black Hole",
    "Gravité": 22,
    "Diametre": 19,
    "Ressource": "Null",
    "Terrain": "Très dangereux",
    "Atmosphère": "Null",
    "Température": "Gel",
    "Position_X": -4037136.28,
    "Position_Y": 4355572.35,
    "Position_Z": 7755275.05
  },
  {
    "Nom": "Satreus",
    "Secteur": "Bylen",
    "Lune_de": "",
    "Type": "Planet",
    "Gravité": 0.95,
    "Diametre": 72.86,
    "Ressource": "Normal",
    "Terrain": "Correct",
    "Atmosphère": "Elevé",
    "Température": "Froid la nuit et tempéré le jour",
    "Position_X": -7964998.93,
    "Position_Y": 3778417.35,
    "Position_Z": 4263370.25
  },
  {
    "Nom": "Benac",
    "Secteur": "Saturn",
    "Lune_de": "Saturn",
    "Type": "Moon",
    "Gravité": 0.84,
    "Diametre": 19,
    "Ressource": "Elevé",
    "Terrain": "Accidenté",
    "Atmosphère": "Null",
    "Température": "Gel",
    "Position_X": -974041.39,
    "Position_Y": 1389690.05,
    "Position_Z": 3039746.52
  },
  {
    "Nom": "Bonli",
    "Secteur": "Bylen",
    "Lune_de": "Jerum",
    "Type": "Moon",
    "Gravité": 0.3,
    "Diametre": 19,
    "Ressource": "Normal",
    "Terrain": "Très accidenté",
    "Atmosphère": "Null",
    "Température": "Gel",
    "Position_X": -8873274.57,
    "Position_Y": 3860792.72,
    "Position_Z": 4853598.82
  },
  {
    "Nom": "Cadre",
    "Secteur": "Saturn",
    "Lune_de": "Paradise",
    "Type": "Moon",
    "Gravité": 0.45,
    "Diametre": 19,
    "Ressource": "Normal",
    "Terrain": "Accidenté",
    "Atmosphère": "Null",
    "Température": "Gel",
    "Position_X": -253316.45,
    "Position_Y": 1695652.9,
    "Position_Z": 3391222.09
  },
  {
    "Nom": "Ciybos",
    "Secteur": "Bylen",
    "Lune_de": "Pertnam",
    "Type": "Moon",
    "Gravité": 1,
    "Diametre": 19,
    "Ressource": "Null",
    "Terrain": "Très dangereux",
    "Atmosphère": "Toxique",
    "Température": "Gel",
    "Position_X": -9068322.81,
    "Position_Y": 4131726.67,
    "Position_Z": 3895004.4
  },
  {
    "Nom": "Dwate",
    "Secteur": "Saturn",
    "Lune_de": "Saturn",
    "Type": "Moon",
    "Gravité": 0.27,
    "Diametre": 19,
    "Ressource": "Elevé",
    "Terrain": "Très accidenté",
    "Atmosphère": "Null",
    "Température": "Gel",
    "Position_X": -840949.3,
    "Position_Y": 1236899.6,
    "Position_Z": 3244914.6
  },
  {
    "Nom": "Europa",
    "Secteur": "Saturn",
    "Lune_de": "Saturn",
    "Type": "Moon",
    "Gravité": 0.25,
    "Diametre": 19,
    "Ressource": "Elevé",
    "Terrain": "Correct",
    "Atmosphère": "Null",
    "Température": "Gel",
    "Position_X": -655107.48,
    "Position_Y": 1422718.79,
    "Position_Z": 2971948.31
  },
  {
    "Nom": "Hurin",
    "Secteur": "Saturn",
    "Lune_de": "Takua",
    "Type": "Moon",
    "Gravité": 0.27,
    "Diametre": 19,
    "Ressource": "Faible",
    "Terrain": "Accidenté",
    "Atmosphère": "Null",
    "Température": "Gel",
    "Position_X": -1415188.74,
    "Position_Y": 1741032.97,
    "Position_Z": 3440735.78
  },
  {
    "Nom": "KL-136",
    "Secteur": "Saturn",
    "Lune_de": "Kor",
    "Type": "Moon",
    "Gravité": 0.1,
    "Diametre": 19,
    "Ressource": "Normal",
    "Terrain": "Correct",
    "Atmosphère": "Null",
    "Température": "Gel",
    "Position_X": -422730.46,
    "Position_Y": 946278.34,
    "Position_Z": 2519712.71
  },
  {
    "Nom": "Muon",
    "Secteur": "Caldera",
    "Lune_de": "Caldera",
    "Type": "Moon",
    "Gravité": 0.52,
    "Diametre": 19,
    "Ressource": "Elevé",
    "Terrain": "Accidenté",
    "Atmosphère": "Null",
    "Température": "Gel",
    "Position_X": -2496939.02,
    "Position_Y": 8719991.04,
    "Position_Z": 4923887.18
  },
  {
    "Nom": "IO",
    "Secteur": "Bylen",
    "Lune_de": "Satreus",
    "Type": "Moon",
    "Gravité": 0.4,
    "Diametre": 19,
    "Ressource": "Null",
    "Terrain": "Correct",
    "Atmosphère": "Elevé",
    "Température": "Tempéré",
    "Position_X": -8093050.4,
    "Position_Y": 3794743.99,
    "Position_Z": 4291413.78
  },
  {
    "Nom": "Oster",
    "Secteur": "Bylen",
    "Lune_de": "Jerum",
    "Type": "Moon",
    "Gravité": 0.35,
    "Diametre": 19,
    "Ressource": "Null",
    "Terrain": "Accidenté",
    "Atmosphère": "Null",
    "Température": "Gel",
    "Position_X": -8945676.92,
    "Position_Y": 4116422.8,
    "Position_Z": 4662614.18
  },
  {
    "Nom": "Titania",
    "Secteur": "Caldera",
    "Lune_de": "Murdor",
    "Type": "Moon",
    "Gravité": 0.39,
    "Diametre": 19,
    "Ressource": "Null",
    "Terrain": "Correct",
    "Atmosphère": "Null",
    "Température": "Gel",
    "Position_X": -3426926.13,
    "Position_Y": 8341306.97,
    "Position_Z": 4858286.27
  },
  {
    "Nom": "Tulni",
    "Secteur": "Bylen",
    "Lune_de": "PT-PT013",
    "Type": "Moon",
    "Gravité": 0.44,
    "Diametre": 19,
    "Ressource": "Faible",
    "Terrain": "Accidenté",
    "Atmosphère": "Null",
    "Température": "Tempéré la nuit et chaud le jour",
    "Position_X": -8177284.46,
    "Position_Y": 4918911.34,
    "Position_Z": 3833812.86
  },
  {
    "Nom": "Wuat",
    "Secteur": "Saturn",
    "Lune_de": "Kor",
    "Type": "Moon",
    "Gravité": 0.37,
    "Diametre": 19,
    "Ressource": "Faible",
    "Terrain": "Correct",
    "Atmosphère": "Null",
    "Température": "Gel",
    "Position_X": -658113.47,
    "Position_Y": 798070.24,
    "Position_Z": 2331429.8
  },
  {
    "Nom": "Xie",
    "Secteur": "Caldera",
    "Lune_de": "Ravcor",
    "Type": "Moon",
    "Gravité": 0.37,
    "Diametre": 19,
    "Ressource": "Elevé",
    "Terrain": "Correct",
    "Atmosphère": "Null",
    "Température": "Gel",
    "Position_X": -1758095.23,
    "Position_Y": 9044128.9,
    "Position_Z": 5120798
  },
  {
    "Nom": "Yiu",
    "Secteur": "Caldera",
    "Lune_de": "Ravcor",
    "Type": "Moon",
    "Gravité": 0.47,
    "Diametre": 19,
    "Ressource": "Elevé",
    "Terrain": "Accidenté",
    "Atmosphère": "Null",
    "Température": "Tempéré",
    "Position_X": -1802479.77,
    "Position_Y": 9171115.33,
    "Position_Z": 5201862.06
  },
  {
    "Nom": "Ziro",
    "Secteur": "Bylen",
    "Lune_de": "PT-PT013",
    "Type": "Moon",
    "Gravité": 0.34,
    "Diametre": 19,
    "Ressource": "Elevé",
    "Terrain": "Correct",
    "Atmosphère": "Null",
    "Température": "Gel",
    "Position_X": -8149420.2,
    "Position_Y": 5151568.21,
    "Position_Z": 3677455.2
  }
];

const container = document.querySelector("#planets");
const selectSector = document.querySelector("#selectSector");

let filterSector = selectSector.value;
generateCard("null");


selectSector.addEventListener('change', evt => {
  if (selectSector.value !== ""){
    generateCard(selectSector.value);
  }
  else {
    generateCard("null");
  }
})

function generateCard(filter){
  container.innerHTML = "";
  planets.forEach(planet => {
    if (planet.Secteur === filter || filter === "null"){
      const divCol = document.createElement('div');
      divCol.classList.add("col", "justify-content-center", "shadow");

      const divCard = document.createElement('div');
      divCard.classList.add("card", "bg-dark", "text-white", "shadow");
      divCard.style.maxWidth = "520px";
      divCol.append(divCard);

      const img = document.createElement('img');
      img.setAttribute("src", `./assets/img/image/${planet.Nom}.png`);
      img.classList.add("card-img");
      divCard.append(img);

      const divCardOverlay = document.createElement('div');
      divCardOverlay.classList.add("card-img-overlay", "card-right")
      divCard.append(divCardOverlay);

      const planetName = document.createElement('h5');
      planetName.classList.add("card-title");
      planetName.innerText = planet.Nom;
      divCardOverlay.append(planetName);

      const planetSector = document.createElement('b');
      planetSector.innerText = `Secteur de ${planet.Secteur}`;
      divCardOverlay.append(planetSector);

      const planetType = document.createElement('p');
      if (planet.Type === "Moon"){
        planetType.innerText = `Lune de ${planet.Lune_de}`;
      }else {
        planetType.innerText = "Type : planète";
      }
      divCardOverlay.append(planetType);

      const planetSettings = document.createElement('ul');
      planetSettings.classList.add("card-text");
      planetSettings.innerText = "Carratéristiques";
      divCardOverlay.append(planetSettings);

      const planetGravity = document.createElement('li');
      planetGravity.innerText = `Gravité : ${planet.Gravité}`;
      planetSettings.append(planetGravity);

      const planetDiam = document.createElement('li');
      planetDiam.innerText = `Diamètre : ${planet.Diametre}`;
      planetSettings.append(planetDiam);

      const planetResources = document.createElement('li');
      if (planet.Ressource === "Null"){
        planetResources.innerHTML = `Ressource : <b style="color: crimson">${planet.Ressource}</b>`;
      } else if (planet.Ressource === "Faible"){
        planetResources.innerHTML = `Ressource : <b style="color: chocolate">${planet.Ressource}</b>`;
      } else if (planet.Ressource === "Normal"){
        planetResources.innerHTML = `Ressource : <b style="color: yellowgreen">${planet.Ressource}</b>`;
      } else if (planet.Ressource === "Elevé"){
        planetResources.innerHTML = `Ressource : <b style="color: gold">${planet.Ressource}</b>`;
      }
      planetSettings.append(planetResources);

      const planetGround = document.createElement('li');
      if (planet.Terrain === "Très dangereux"){
        planetGround.innerHTML = `Terrain : <b style="color: crimson">${planet.Terrain}</b>`;
      } else if (planet.Terrain === "Accidenté" || planet.Terrain === "Très accidenté"){
        planetGround.innerHTML = `Terrain : <b style="color: chocolate">${planet.Terrain}</b>`;
      } else if (planet.Terrain === "Correct"){
        planetGround.innerHTML = `Terrain : <b style="color: chartreuse">${planet.Terrain}</b>`;
      } else if (planet.Terrain === "Agréable"){
        planetGround.innerHTML = `Terrain : <b style="color: aqua">${planet.Terrain}</b>`;
      } else if (planet.Terrain === "Plat"){
        planetGround.innerHTML = `Terrain : <b style="color: aliceblue">${planet.Terrain}</b>`;
      }
      planetSettings.append(planetGround);

      const planetAtmosphere = document.createElement('li');
      if (planet.Atmosphère === "Toxique"){
        planetAtmosphere.innerHTML = `Atmosphère : <b style="color: crimson">${planet.Atmosphère}</b>`;
      } else if (planet.Atmosphère === "Null"){
        planetAtmosphere.innerHTML = `Atmosphère : <b style="color: chocolate">${planet.Atmosphère}</b>`;
      } else if (planet.Atmosphère === "Faible" || planet.Atmosphère === "Faible / Elevé"){
        planetAtmosphere.innerHTML = `Atmosphère : <b style="color: yellowgreen">${planet.Atmosphère}</b>`;
      } else if (planet.Atmosphère === "Elevé"){
        planetAtmosphere.innerHTML = `Atmosphère : <b style="color: gold">${planet.Atmosphère}</b>`;
      }
      planetSettings.append(planetGround);

      const planetTemperature = document.createElement('li');
      planetTemperature.innerHTML = `Température : <b>${planet.Température}</b>`;
      planetSettings.append(planetTemperature);

      const planetPosition = document.createElement('ul');
      planetPosition.innerText = "Position";
      planetPosition.classList.add("card-text");
      divCardOverlay.append(planetPosition);

      const positionX = document.createElement('li');
      positionX.innerText = `X : ${planet.Position_X}`;
      planetPosition.append(positionX);

      const positionY = document.createElement('li');
      positionY.innerText = `Y : ${planet.Position_Y}`;
      planetPosition.append(positionY);

      const positionZ = document.createElement('li');
      positionZ.innerText = `Z : ${planet.Position_Z}`;
      planetPosition.append(positionZ);

      container.append(divCol);
    }
  });
}


