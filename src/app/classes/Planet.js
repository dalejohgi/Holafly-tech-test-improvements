class Planet {
  getById(id) {
    console.log("Implements me father");
  }
}

class PlanetInWookie extends Planet {}
class PlanetInEnglish extends Planet {}

const PlanetFactory = {
  }

module.exports = PlanetFactory;