import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';

export default function index() {
  const Home = lazy(() => import('../pages/a'));
  const Page = lazy(() => import('../pages/b'));
  const Notfound = lazy(() => import('../pages/notfound'));

  return (
    <Suspense fallback={<h1>正在联网获取用户名...</h1>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/page" component={Page} />
        <Route component={Notfound} />
      </Switch>
    </Suspense>
  );
}
