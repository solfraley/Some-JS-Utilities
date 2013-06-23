var _ = {}; //container for our _ methods.
//using the _ object as a container allows us to build our methods within a module
//and interface via their name.

(function (){

//a simple extention of the core js slice method for arrays
  _.first = function(array, n) {
    if (n == undefined){
      return array[0];
    }
    return array.slice(0,n);
  };

//access the last n elements of array
  _.last = function(array, n) {
    if (n == undefined){
      return array.pop();
    }
    if (n>=array.length){
      return array;
    }
    return array.slice(array.length-n);

  };

//Very useful higher order function executes code(iterator) on each of a collection using a for in loop.
//note this does not return any results, just executes the code for it's side effects  
  _.each = function(collection, iterator) {
    for (var i in collection){
      iterator(collection[i], i, collection);
    }
  };

//most often we use arrays indexes to access target data, however, sometimes
//we given a known target we need and index
  _.indexOf = function(array, target){
    for (var i in array){
      if (target === array[i]){
        return Number(i);//won't work for objects
      }
    }
    return -1;
  };

//another higher order function useful for pairing down a collection, returns only values
//that pass the iterator function testing them
  _.filter = function(collection, iterator) {
    var arrayB = [];
    for(var i = 0; i<collection.length; i+=1){
      if (iterator(collection[i])) {
         arrayB.push(collection[i]);
      }
    };
    return arrayB;
  };

//similar to the above
  _.reject = function(collection, iterator) {
    var noPass = [];
    for (var i=0; i<collection.length; i+=1){
      if (iterator(collection[i])!==true){
        noPass.push(collection[i]);
      }
    };
    return noPass;
  };

//this is filtering elimnates duplicates in an array using our contains method
//defined subsequently
  _.uniq = function(array) {
    var nodup = [array[0]];
    for (var el in array){
      if (_.contains(nodup, array[el])==false)
        nodup.push(array[el]);
    }
    return nodup;
  };

//similar to each however this returns an array of the results of calling the iterator 
//on each element of our array and does so using a new array i.e. not mutator of input array
  _.map = function(array, iterator) {
    var results=[];
    for (var i = 0; i < array.length; i+=1) {
      results.push(iterator(array[i]));
    };
    return results;
  };

//given an array of objects we can pluck out just certain properties from those objects
//in the array, using map to return them in a new array.
  _.pluck = function(array, propertyName) {
    return _.map(array, function(value){
      return value[propertyName];
    });
  };

//invoke allows us to call any method (within our scope access) on the list of our choise
//and pass in an arguments that may be needed for the method.
  _.invoke = function(list, methodName, args) {
    var values = [];
    for (el in list){
      values.push(list[el][methodname]([args]));
    }
    return values;
  };

//here we convert a collection of values to a single value by doing an opertation that uses 
//the result of doing that same operation on the previous value of the collection.
  _.reduce = function(collection, iterator, initialValue) {
    if (initialValue == undefined || NaN){
        initialValue = 0;
      };
    var previousValue = initialValue;
    for (var i in collection){
      previousValue = iterator(previousValue, collection[i]);
    };
    return previousValue;
  };

//very handy to be able to check if a certain collection contains a target value
  _.contains = function(collection, target) {
    return _.reduce(collection, function(wasFound, item) {
      if(wasFound) {
        return true;
      }
      return item === target;
    }, false);
  };

//simply tests each member of a collection and returns a boolean for if they all pass or not
  _.every = function(collection, iterator) {
    if (_.contains(_.map(collection, iterator), false) == true){
      return false;
    }
      else{
      	return true;
      }
  };
//return true if some pass
  _.some = function(collection, iterator) {
  	if (_.contains(_.map(collection, iterator), true)){
  		return true;
  	}
  	else {
  		return false;
  	}
  
    
  };
//more to come...


}).call(this);