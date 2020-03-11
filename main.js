const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
      get appetizers(){
        return this.courses_appetizers;
      },
      set appetizers(appetizersIn) {
        this._courses.appetizers = appetizers;
      },
      get mains(){
        return this.courses._mains;
      },
      set mains(mainsIn) {
        this._courses.mains = mains;
      },
      get desserts(){
        return this.courses._desserts;
      },
      set desserts(dessertsIn) {
        this._courses.desserts = desserts;
      },
    get courses(){
      return {
          appetizers: this.appetizers,
          mains: this.mains,
          desserts: this.desserts
        };
    },
    
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      price : dishPrice,
      name : dishName,
    };
    return this._courses[courseName].push(dish);
  },
    
  getRandomDishFromCourse: function (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
    
  generateRandomMeal: function() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const total = appetizer.price + main.price + dessert.price;
          return `Your meal tonight starts with a delicious appetizer of ${appetizer.name}, followed by a ${main.name} dish for the main course, and finished with ${dessert.name}. The cost will be ${total} euro.`
  },
  };
  
  menu.addDishToCourse('appetizers', 'Bitter Ballen', 5.00);
  menu.addDishToCourse('appetizers', 'Kaas', 6.50);
  menu.addDishToCourse('appetizers', 'Croquettes', 4.00);
  menu.addDishToCourse('appetizers', 'Cucumber Salad', 6.50);
  menu.addDishToCourse('appetizers', 'Baked Courgette', 6.25);

  menu.addDishToCourse('mains', 'Dutch Burger', 9.50);
  menu.addDishToCourse('mains', 'Chicken Fried Chicken', 8.00);
  menu.addDishToCourse('mains', 'Wild Caught Salmon', 12.00);
  menu.addDishToCourse('mains', 'Andive Stampot', 5.85);
  menu.addDishToCourse('mains', 'Snapper', 12.00);
  
  menu.addDishToCourse('desserts', 'Ice Cream', 3.00);
  menu.addDishToCourse('desserts', 'Pie', 3.50);
  menu.addDishToCourse('desserts', 'Wine', 6.00);
  menu.addDishToCourse('desserts', 'Coffee met Digestives', 4.00);
  menu.addDishToCourse('desserts', 'Sambuca', 6.00);
  menu.addDishToCourse('desserts', 'Tea', 6.00);
  
  
// console.log(menu)
  
  let meal = menu.generateRandomMeal();
  console.log(meal);
  
  