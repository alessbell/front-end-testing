import { dark as theme } from 'mdx-deck/themes';
import nightOwl from 'prism-react-renderer/themes/nightOwl';

export default {
  ...theme,
  codeSurfer: {
    ...nightOwl,
    showNumbers: false,
  },
  li: {
    margin: '2rem',
  },
};

// Read the docs for more info:
// https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
// https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
