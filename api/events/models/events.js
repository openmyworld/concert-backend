"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

const slugify = require("slugify");

// const getUniqueSlug = async (title, num = 0) => {
//   let input = `${title}`;
  
//   if (num > 0) {
//     input = `${title}-${num}`;
//   }
  
//   const slug = slugify(input, {
//     lower: true
//    });
  
//   const [events] = await strapi.services.events.find({
//     slug: slug
//   });

//   if (!events){
//     return slug;
//   }
//   else {
//     return getUniqueSlug(title, num + 1);
//   }
// }

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (data.name) {
        data.slug = slugify(data.name, { lower: true });
      }
    },
    
    beforeUpdate: async (params, data) => {
      if (data.name) {
        data.slug = slugify(data.name, { lower: true });
      }
    },
  },
};
