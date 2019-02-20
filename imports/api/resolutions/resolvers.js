import Resolutions from './resolutions';

//Resolutions.insert({
//      name: "Test es"
//});


export default {
       Query: {
              resolutions() {
                     return Resolutions.find({}).fetch();
              }
       }
};