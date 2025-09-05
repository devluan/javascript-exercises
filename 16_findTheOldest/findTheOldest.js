const calculateAge = function(person) {
    if (!person.yearOfDeath) person.yearOfDeath = new Date().getFullYear();
    return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(people) {
    return people.reduce((oldestPerson, currentPerson) => 
        calculateAge(currentPerson) > calculateAge(oldestPerson) 
        ? currentPerson 
        : oldestPerson
     , people.at(0));
};

// Do not edit below this line
module.exports = findTheOldest;
