'use strict';

// Utils service
function UtilSrvc() {
  return {
      // Function to get value of property of the object by name
      // Example:
      // var obj = {car: {body: {company: {name: 'Mazda'}}}};
      // getPropertyValue(obj, 'car.body.company.name')
      getPropertyValue:
        function(item, propertyStr) {
          var value = item;

          try {
            var properties = propertyStr.split('.');

            for (var i = 0; i < properties.length; i++) {
              value = value[properties[i]];

              if (value !== Object(value))
                break;
            }
          }
          catch(ex) {
            console.log('Something goes wrong :/');
          }

          return value == undefined ? '' : value;
        }
  }
};

// resolving minification problems
UtilSrvc.$inject = [];
servicesModule.factory('UtilSrvc', UtilSrvc);

