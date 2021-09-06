import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

export default function index() {
  const Home = lazy(() => import('../pages/Home'));
  const Page = lazy(() => import('../pages/Page'));
  const Notfound = lazy(() => import('../pages/notfound'));

  return (
    <Suspense fallback={<h1>正在联网获取用户名...</h1>}>
      <Switch>
        <Route exact path="/dist/" component={Home} />
        <Route path="/dist/page" component={Page} />
        <Route component={Notfound} />
      </Switch>
    </Suspense>
  );
}
