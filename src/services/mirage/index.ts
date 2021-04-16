import { createServer, Factory, Model, Response } from 'miragejs'
import faker from 'faker';

type User = {
  name: string;
  email: string;
  createdAt: string;
}


export function makeServer(){
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({})
    },

    factories: {
      user: Factory.extend({
        name(){
          return faker.name.firstName()
        },
        email(){
          return faker.internet.email()
        },
        createdAt(){
          return faker.date.recent()
        },
      })
    },

    seeds(server){
      server.createList('user', 200);
    },

    routes(){
      this.namespace = 'api';
      this.timing

      this.get('/users', (schema, request) => {
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = schema.all('user').length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = schema.all('user').models.slice(pageStart, pageEnd);

        return new Response(
          200, 
          {
            "x-total-count": String(total)
          },
          users
        );
      });
      this.get('/users/:id');
      this.post('/users');

      this.namespace = '';
      this.passthrough();
    }
  });


  return server;
}