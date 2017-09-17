import DS from 'ember-data';

const {
  JSONSerializer
} = DS;

function parseURL(url) {
  let startIndex = url.lastIndexOf('/') + 1;
  return url.substr(startIndex);
}

export { parseURL };

export default JSONSerializer.extend({

  // normalize implementation turns the url 'http.....id' into 'id'
  normalize(typeClass, hash) {
    typeClass.eachRelationship((key, relationshipMeta) => {

      if (hash[key] === undefined) {
        delete hash[key];
      } else {
        if (relationshipMeta.kind === 'belongsTo') {
          hash[key] = parseURL(hash[key]);
        } else if (relationshipMeta.kind === 'hasMany') {
          // If hasMany relationship, map the whole array with the parseURL function
          hash[key] = hash[key].map((url) => {
            return parseURL(url);
          // But if a link is empty (relationship defined but empty), we get an array with empty items, so filter it
          }).filter((id) => {
            return (id.length > 0 && id !== 'TODO');
          });
          // And in the end, if we have an empty hash[key], delete it
          if (hash[key].length === 0) {
            delete hash[key];
          }
        }
      }

    });
    return this._super.apply(this, arguments); // eslint-disable-line
  }

});
