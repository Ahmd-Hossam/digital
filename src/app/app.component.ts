import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationCancel, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter, map, switchMap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
declare let $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class AppComponent implements OnInit, OnDestroy {
    location: any;
    routerSubscription: any;
    isAuthenticated: boolean = false;

    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title) {
    }

    ngOnInit() {
        this.recallJsFuntions();

        const onNavigationEnd = this.router.events.pipe(filter(event => event instanceof NavigationEnd));
        // Change page title on navigation or language change, based on route data
        onNavigationEnd
            .pipe(
                map(() => {
                    let route = this.activatedRoute;
                    while (route.firstChild) {
                        route = route.firstChild;
                    }
                    return route;
                }),
                filter((route: any) => route.outlet === 'primary'),
                switchMap((route: any) => route.data)
            )
            .subscribe((event: any) => {
                this.titleService.setTitle(event.title || environment.appName);
            });
    }

    recallJsFuntions() {
        this.routerSubscription = this.router.events
            .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
            .subscribe(event => {
                $.getScript('../assets/js/custom.js');
                this.location = this.router.url;
                if (!(event instanceof NavigationEnd)) {
                    return;
                }
                window.scrollTo(0, 0)
            });
    }

    ngOnDestroy() {
        this.routerSubscription.unsubscribe();
    }
}
