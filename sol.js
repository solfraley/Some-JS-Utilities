var _ = {};

(function (){

  _.first = function(array, n) {
    if (n == undefined){
      return array[0];
    }
    return array.slice(0,n);
  };

  _.last = function(array, n) {
    if (n == undefined){
      return array.pop();
    }
    if (n>=array.length){
      return array;
    }
    return array.slice(array.length-n);

  };

  _.each = function(collection, iterator) {
    for (var i in collection){
      iterator(collection[i], i, collection);
    }
  };

  _.indexOf = function(array, target){
    for (var i in array){
      if (target === array[i]){
        return Number(i);//won't work for objects
      }
    }
    return -1;
  };

  _.filter = function(collection, iterator) {
    var arrayB = [];
    for(var i = 0; i<collection.length; i+=1){
      if (iterator(collection[i])) {
         arrayB.push(collection[i]);
      }
    };
    return arrayB;
  };

  _.reject = function(collection, iterator) {
    var noPass = [];
    for (var i=0; i<collection.length; i+=1){
      if (iterator(collection[i])!==true){
        noPass.push(collection[i]);
      }
    };
    return noPass;
  };

  _.uniq = function(array) {
    var nodup = [array[0]];
    for (var el in array){
      if (_.contains(nodup, array[el])==false)
        nodup.push(array[el]);
    }
    return nodup;
  };

  _.map = function(array, iterator) {
    var results=[];
    for (var i = 0; i < array.length; i+=1) {
      results.push(iterator(array[i]));
    };
    return results;
  };

  _.pluck = function(array, propertyName) {
    return _.map(array, function(value){
      return value[propertyName];
    });
  };

  _.invoke = function(list, methodName, args) {
    var values = [];
    for (el in list){
      values.push(list[el][methodname]([args]));
    }
    return values;
  };

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

  _.contains = function(collection, target) {
    return _.reduce(collection, function(wasFound, item) {
      if(wasFound) {
        return true;
      }
      return item === target;
    }, false);
  };

  _.every = function(collection, iterator) {
    if (_.contains(_.map(collection, iterator), false) == true){
      return false;
    }
      else{
      	return true;
      }
  };

  _.some = function(collection, iterator) {
  	if (_.contains(_.map(collection, iterator), true)){
  		return true;
  	}
  	else {
  		return false;
  	}
  
    
  };



}).call(this);