import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import authRoutes from '~/routes/auth.routes';

interface BreadcrumbItem {
  id?: string;
  title: string;
  path: string;
  isLast?: boolean;
}

export const useBreadcrumbs = () => {
  const location = useLocation();
  const params = useParams();
  const [items, setItems] = useState<Array<BreadcrumbItem>>([]);

  useEffect(() => {
    const crumbs = authRoutes
      .flatMap((item) => {
        if (!item.children) {
          return [item];
        }
        return item.children;
      })
      // Get all routes that contain the current one.
      .filter(({ path }) => location.pathname.includes(path))
      // Swap out any dynamic routes with their param values.
      // E.g. "/pizza/:pizzaId" will become "/pizza/1"
      .map(({ path, id, title }) => ({
        path: Object.keys(params).length
          ? Object.keys(params).reduce(
              (paramPath, param) => paramPath.replace(`:${param}`, params[param] || ''),
              path
            )
          : path,
        id,
        title,
      }));

    setItems(
      crumbs.map((item, index) => ({
        id: item.id,
        title: item.title || '',
        path: item.path,
        isLast: index === crumbs.length - 1,
      }))
    );
  }, [location, params]);

  return { items };
};
