import { Box, Breadcrumbs, Link, LinkProps } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useBreadcrumbs } from '~/hooks/common/breadcrumb.hook';

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const LinkRouter = (props: LinkRouterProps) => <Link {...props} component={RouterLink} />;

const Breadcrumb = () => {
  const { items } = useBreadcrumbs();
  return (
    <Box py={2} pl={1} mb={1}>
      <Breadcrumbs>
        {items.map((item) => (
          <LinkRouter key={item.id} to={item.path} underline="hover" color="inherit">
            {item.title}
          </LinkRouter>
        ))}
      </Breadcrumbs>
    </Box>
  );
};

export default Breadcrumb;
