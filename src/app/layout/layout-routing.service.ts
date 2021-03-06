import { Routes, Route } from '@angular/router';
import { LayoutComponent } from './layout.component';

/**
 * Provides helper methods to create routes.
 */
export class Layout {
  /**
   * Creates routes using the Layout component and authentication.
   * @param routes The routes to add.
   * @return The new route using Layout as the base.
   */
  static childRoutes(routes: Routes, allowedClaims: any = []): Route {
    return {
      path: '',
      component: LayoutComponent,
      children: routes,
      // Reuse LayoutComponent instance when navigating between child views
      data: { reuse: true, allowedClaims }
    };
  }
}
