var Person = function(firstName, lastName, age, weight, height, friends){
  this.firstName = firstName;
  this.lastName = lastName;
  (typeof age === 'undefined')? this.age = 30 : this.age = age;
  (typeof weight === 'undefined')? this.weight = 150 : this.weight = weight;
  (typeof height === 'undefined')? this.height = (Math.floor(Math.random() * 11)) : this.height = height;
  (typeof friends === 'undefined')? this.friends = [] : this.friends = friends;
};

Person.prototype = {
  fullName: function(){
    return this.firstName + this.lastName;
  },
  weightInStone: function(){
    return this.weight/14 + " is the weight in stone";
  },
  addFriend: function(nameFriend){
    this.friends.push(nameFriend);
    return this.friends;
  },
  removeFriend: function(array, item){
    for(var i in array){
      if(array[i] === item){
        array.splice(i, 1);
        break;
      }
    }
    return this.friends;
  },
  greetPeople: function(){
    return " Hello " + this.friends;
  }

};

// greetPeople should return a string that greets an optional array of Person objects (default to the person's friends) by their full names,
//with an optional greeting (default to "Hi"). If no people are provided and the person has no friends.



// debugger;
var joe = new Person('Joe', 'NoLastname', 46 , undefined , 7, ['Susan']);
console.log(joe.fullName());
//console.log(joe.friends([]));
console.log(joe.greetPeople());
// console.log(joe.removeFriend(this.friends,'Justin'));


