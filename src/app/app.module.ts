import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';

imports: [
  HttpClientModule,
  HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 })
]
