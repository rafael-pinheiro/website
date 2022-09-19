import type React from "react";
import { Page } from "../framework/pages";

export interface LayoutProps {
  children: React.ReactNode;
  page: Page;
}

export type Layout = React.FC<LayoutProps>;