import { useCallback } from 'react';
import { Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

//local imports
import { Toaster } from 'components';

const RouteMiddleware = ({ config }) => {
  const user = ''; //'ll come user
  const { element: Element, path, isAuthProtected, title } = config;

  const Render = useCallback(() => {
    if (isAuthProtected && !user) return <Navigate to="/auth/login" />;

    if (path.includes('auth') && !!user) return <Navigate to="/" />;

    return (
      <>
        <Toaster />
        <Helmet>
          <title>{title}</title>
        </Helmet>
        {Element}
      </>
    );
  }, [title, isAuthProtected, path, Element, user]);

  return <Render />;
};

export default RouteMiddleware;
