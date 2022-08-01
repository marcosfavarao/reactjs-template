import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model, Response } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    databaseModel: Model, // Database model is database name
  },

  seeds(server) {
    // Database population - Is database model name + S(always on plural)
    server.db.loadData({
      databaseModels: [
        {
          id: 1,
          propertyName: 'property value',
        },
      ],
    });
  },

  routes() {
    // API endpoints.
    this.namespace = 'api';

    this.get('/endpoint', () => {
      return this.schema.all('databaseModel');
    });

    this.post('/endpoint', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('databaseModel', data);
    });

    this.patch('/endpoint/:id', (schema, request) => {
      const { id } = request.params;
      const data = JSON.parse(request.requestBody);

      if (id !== null && id) {
        schema.find('databaseModel', id)?.update(data);
        return new Response(200);
      }

      return new Response(204);
    });

    this.delete('/endpoint/:id', (schema, request) => {
      const { id } = request.params;

      if (id !== null && id) {
        schema.find('databaseModel', id)?.destroy();
        return new Response(200);
      }

      return new Response(204);
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
