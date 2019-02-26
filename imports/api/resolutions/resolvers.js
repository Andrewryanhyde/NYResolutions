import Resolutions from './resolutions';

//Resolutions.insert({
//      name: "Test es"
//});


export default {
       Query: {
              resolutions(obj, args, {userId}) {
                     console.log(userId);
                     return Resolutions.find({
                            userId
                     }).fetch();
              }
       },

       Mutation: {
              createResolution(obj, { name }, context) {
                     console.log(name);
                     const resolutionId = Resolutions.insert({
                           name
                     });
                     return Resolutions.findOne(resolutionId);
              }
       }

};