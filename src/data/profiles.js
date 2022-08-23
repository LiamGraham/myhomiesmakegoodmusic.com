import profiles from './profiles.json';

const MY_ID = 'theyalright';

/**
 * Returns profile data corresponding to the given ID if the ID exits, otherwise returns null;
 * 
 * @param {string} id ID of 
 * @returns {object | null}
 */
export function getProfile(id) {
  if (!profileExists(id)) {
    console.error(`Profile '${id}' does not exist`);
    return null
  }
  return profiles[id];
}

/**
 * Returns a random profile ID.
 * 
 * @returns {string}
 */
export function getRandomId() {
  const allIds = Object.keys(profiles);
  return allIds[Math.floor(Math.random() * allIds.length)]
}

/**
 * Returns true if a profile with the given ID exists, otherwise returns false.
 * 
 * @param {string} id 
 * @returns {boolean}
 */
export function profileExists(id) {
  return Object.hasOwn(profiles, id);
}

/**
 * Returns all profile IDs.
 * 
 * @returns {array}
 */
export function getIds() {
  return Object.keys(profiles);
}

/**
 * Returns all profiles.
 * 
 * @returns {array}
 */
export function getProfiles() {
  return profiles;
}

/**
 * Returns true if given ID is my own (i.e. 'theyalright').
 * 
 * @param {*} id 
 */
export function isMe(id) {
  return id === MY_ID;
}
