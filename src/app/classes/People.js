class People {
  getById(id) {
    console.log("Implements me father");
  }
}

class PeopleInWookie extends People {}
class PeopleInEnglish extends People {}
const PeopleFactory = {}

module.exports = PeopleFactory;