/**
 * Created by brycedcarter on 6/4/16.
 */

import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import {DND_PROVIDERS} from 'ng2-dnd/ng2-dnd';
import { InputSection } from './app.inputSection'

bootstrap(AppComponent, [DND_PROVIDERS]);

