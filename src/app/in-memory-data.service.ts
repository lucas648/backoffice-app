import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, name: 'Lucas Costa', email: 'lucas@email.com' },
      { id: 2, name: 'Maria Silva', email: 'maria@email.com' }
    ];

    const products = [
      { id: 1, name: 'Notebook', price: 3500 },
      { id: 2, name: 'Mouse Gamer', price: 200 }
    ];

    return { users, products };
  }
}
