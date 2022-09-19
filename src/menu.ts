import { Page, get, journals } from './framework/pages';

interface Menu {
  title: string;
  emoji: string;
  emojiAlt: string;
  pages: Page[];
}

export const menus: Menu[] = [{
  title: 'Welcome',
  emoji: '👋',
  emojiAlt: 'Waving hand emoji',
  pages: [
    '/',
    '/graph',
  ].map(get)
}, {
  title: 'Journal',
  emoji: '📔',
  emojiAlt: 'Emoji of a journal',
  pages: journals
}, {
  title: 'Explore',
  emoji: '📄',
  emojiAlt: 'Page/Paper emoji',
  pages: [
    '/typescript',
    '/react',
  ].map(get)
}];