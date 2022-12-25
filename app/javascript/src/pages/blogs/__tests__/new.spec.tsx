import React from 'react';
import { render, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../../../../../stories/pages/blogs/new.stories';

describe('/pages/blogs/new', () => {
  describe('リクエストが成功した時', () => {
    it('アラートが表示されること', async () => {
      const { FilledSuccess } = composeStories(stories);
      const { container } = render(<FilledSuccess />);
      const canvas = within(container);
      void FilledSuccess.play({ canvasElement: container });

      expect(await canvas.findByText('Blog Created!')).toBeInTheDocument();
    });
  });
});
