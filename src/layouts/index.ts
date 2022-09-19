import type React from 'react';
import { Layout } from './LayoutProps';
import { ContentLayout } from './ContentLayout';
import { JournalLayout } from './JournalLayout';

export enum LayoutTypes {
  Content = 'content',
  Journal = 'journal',
}

export const layouts: Record<LayoutTypes, Layout> = {
  [LayoutTypes.Content]: ContentLayout,
  [LayoutTypes.Journal]: JournalLayout,
};