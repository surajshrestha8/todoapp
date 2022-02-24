import { useEffect, useState } from 'react';
import { matchRoutes, useLocation, useParams } from 'react-router-dom';
import { RouteItem } from '~/interface/common.interface';
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
  const [routes, setRoutes] = useState<Array<RouteItem>>([]);

  useEffect(() => {
    setRoutes(
      authRoutes.flatMap((item) => {
        if (!item.children) {
          return [item];
        }
        return item.children;
      })
    );
  }, []);

  useEffect(() => {
    // Get the path pattern instead of actual path
    // E.g. if current path is /admin/1/edit it will help us to find /admin/:id/edit
    const pathPattern = matchRoutes(routes, location);
    if (!pathPattern) {
      return;
    }

    const routePath = pathPattern[0].route.path || '';

    const crumbs = routes
      // Get all routes that contain the current one.
      .filter(({ path }: RouteItem) => routePath.includes(path))
      // Swap out any dynamic routes with their param values.
      // E.g. "/pizza/:pizzaId" will become "/pizza/1"
      .map(({ path, id, title }: RouteItem) => ({
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
  }, [location, params, routes]);

  return { items };
};
