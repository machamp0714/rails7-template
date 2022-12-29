import { rest } from 'msw';
import { faker } from '@faker-js/faker/locale/ja';

export const handlers = {
  index: rest.get('/blogs', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: faker.random.numeric(),
          title: faker.lorem.word(),
          description: faker.lorem.sentence(),
          created_at: '2020-01-01',
          updated_at: '2020-01-01',
        },
        {
          id: faker.random.numeric(),
          title: faker.lorem.word(),
          description: faker.lorem.sentence(),
          created_at: '2020-01-01',
          updated_at: '2020-01-01',
        },
      ])
    );
  }),
  create: rest.post('/blogs', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: faker.random.numeric(),
        title: faker.lorem.word(),
        description: faker.lorem.sentence(),
        created_at: '2020-01-01',
        updated_at: '2020-01-01',
      })
    );
  }),
};
