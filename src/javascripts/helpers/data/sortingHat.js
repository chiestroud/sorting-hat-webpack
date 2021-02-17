const sortingHat = () => {
  const houses = ['gryffindor', 'slytherin', 'hufflepuff', 'ravenclaw'];
  const sorting = houses[Math.floor(Math.random() * houses.length)];
  return sorting;
};

export default sortingHat;
