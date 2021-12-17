/* eslint-disable comma-dangle */
import React from 'react';

export interface RouterConfigDeclaration {
  /**
   * 当前路由路径
   */
  path: string;
  /**
   * 当前路由名称
   */
  name?: string;
  /**
   * 是否严格匹配路由
   */
  exact?: boolean;
  /**
   * 是否需要路由鉴权
   */
  isProtected?: boolean;
  /**
   * 是否需要路由重定向
   */
  isRedirect?: boolean;
  /**
   * 是否需要动态加载路由
   */
  isDynamic?: boolean;
  /**
   * 动态加载路由时的提示文案
   */
  loadingFallback?: string;
  /**
   * 路由组件
   */
  component: any;
  /**
   * 子路由
   */
  routes?: RouterConfigDeclaration[];
}

export const routesConfig: RouterConfigDeclaration[] = [
  {
    path: '/home',
    exact: true,
    isDynamic: true,
    component: React.lazy(
      /* webpackChunkName: "home" */ () => import('../pages/Home')
    ),
  },
  {
    path: '/page',
    isDynamic: true,
    component: React.lazy(() =>
      import(/* webpackChunkName: "Page" */ '../pages/Page')
    ),
  },
  {
    path: '/404',
    isRedirect: true,
    isDynamic: true,
    component: React.lazy(() =>
      import(/* webpackChunkName: "404" */ '../pages/404')
    ),
  },
];
