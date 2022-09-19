import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";
import { MainLayout } from '../layouts/MainLayout';
import { layouts, LayoutTypes } from '../layouts';
import { Page, pages } from './pages';

interface WrapperProps {
  page: Page;
};

const ComponentWrapper: React.FC<WrapperProps> = ({ page }) => {
  const data = useLoaderData() as object;
  const component = <page.Component {...data} />;

  if (page.layout) {
    const Layout = layouts[page.layout as LayoutTypes];
    return <MainLayout><Layout page={page}>{component}</Layout></MainLayout >;
  }

  return <MainLayout>{component}</MainLayout>;
}

const basePath = `${location.protocol}//${location.host}`;

pages.forEach(({ path }) => console.log(`${basePath}${path}`));

const router = createBrowserRouter(pages.map(page => ({
  path: page.path,
  loader: page.loader,
  element: <ComponentWrapper page={page} />,
})), {
  basename: '/website'
});

export const Router = () => <RouterProvider router={router} />;
