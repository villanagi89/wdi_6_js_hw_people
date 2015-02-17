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
        array.splice(i,1);
        break;
      }
    }
    return this.friends;
  }

};
// debugger;
var joe = new Person('Joe', 'NoLastname', 46 , undefined , 7);
// console.log(joe.weightInStone());
console.log(joe.addFriend('Nicole'));
console.log(joe.addFriend('Justin'));
console.log(joe.addFriend('Camilo'));
console.log(joe.addFriend('Pablo'));

console.log(joe.removeFriend(this.friends,'Justin'));
