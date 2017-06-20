import { bootstrap }    from '@angular/platform-browser-dynamic';
import { RootComponent } from './root/root.component';
import {myRouterProvivders} from '.root/root.routes';

bootstrap(RootComponent, [myRouterProvivders]);
