const api = axios.create({ baseURL: 'https://api-growdevers-lucaszluhan.herokuapp.com' });

api.get('/')
   .then((result) => {
      console.log(result.data.data);
      document.querySelector('#lista').innerHTML = `<li>ola</li>`;
   })
   .catch((err) => {
      console.log('erro');
   });
