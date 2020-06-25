
export const fetchPersons = async () => {

  const data = await new Promise(resolve => {
    setTimeout(() => {
      const data = require('../mock/MOCK_DATA.json');
      resolve(data);
    }, 1000);
  });
  
  return data;
};
export default fetchPersons; 
