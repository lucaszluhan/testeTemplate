const api = axios.create({ baseURL: 'https://api-growdevers-lucaszluhan.herokuapp.com' });

api.get('/')
   .then((result) => {
      console.log(result.data.data);
   })
   .catch((err) => {
      console.log('erro');
   });
