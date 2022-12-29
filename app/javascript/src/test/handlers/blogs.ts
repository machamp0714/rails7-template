import { rest } from 'msw';

export const handlers = {
  index: [
    rest.get('/blogs', (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: 1,
            title: 'title',
            description: 'description',
            created_at: '2020-01-01',
            updated_at: '2020-01-01',
          },
          {
            id: 2,
            title: 'title2',
            description: 'description',
            created_at: '2020-01-01',
            updated_at: '2020-01-01',
          },
        ])
      );
    }),
  ],
  create: [
    rest.post('/blogs', (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          id: 1,
          title: 'title',
          description: 'description',
          created_at: '2020-01-01',
          updated_at: '2020-01-01',
        })
      );
    }),
  ],
};
