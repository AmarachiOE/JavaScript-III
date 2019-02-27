/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

// the PARENT constructor function
function GameObject (attribs){
  this.createdAt = attribs.createdAt;
  this.name = attribs.name;
  this.dimensions = attribs.dimensions
}

// Methods for PARENT constructor function -- GameObject
GameObject.prototype.destroy = function () {
  return `${this.name} was removed from the game.`;
}


/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

// the CHILD constructor function -- CharacterStats
function CharacterStats (childAttribs) {
  GameObject.call(this, childAttribs); //accesses parent's attrs
  this.healthPoints = childAttribs.healthPoints;
}

// Methods for CHILD constructor function
CharacterStats.prototype = Object.create(GameObject.prototype); //access all parent's methods/prototypes
CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage.`
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
// the GRANDCHILD constructor function -- Humanoid
function Humanoid (grandchildAttribs) {
  CharacterStats.call(this, grandchildAttribs); //access child's (and parent's?) attrs
  this.team = grandchildAttribs.team;
  this.weapons = grandchildAttribs.weapons;
  this.language = grandchildAttribs.language;
}

// Methods for GRANDCHILD constructor function
Humanoid.prototype = Object.create(CharacterStats.prototype); //access all child's (and paren'ts?) methods/prototypes
Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}.`
}


/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function. 

  // the GREAT-GRANDCHID 1 constructor function -- Villain
  function Villain (villainAttribs) {
    Humanoid.call(this, villainAttribs);
    this.nemesis = villainAttribs.nemesis;
  }

  function Hero (heroAttribs) {
    Humanoid.call(this, heroAttribs);
    this.superPower = heroAttribs.superPower;
  }

  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;


  
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  const thief = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 4,
      height: 2,
    },
    healthpoint: 30,
    name: 'Dale',
    team: 'The Misfits',
    weapons: [
      'Invisibility Mask'
    ],
    language: 'Common Tongue',
    nemesis: 'Saint',
  });

  const watchman = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 3,
      height: 6,
    },
    Healthpoints: 40,
    name: 'Saint',
    team: 'Warriors',
    weapons: [
      'Flying Handcuffs'
    ],
    language: 'Common Tongue',
    superPower: 'Super Sight',
  });