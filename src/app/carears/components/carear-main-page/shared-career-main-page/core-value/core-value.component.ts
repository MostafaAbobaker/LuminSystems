import { Component, Input } from '@angular/core';
import { CoreValueModel } from 'src/app/shared/models/career-page.model';

@Component({
  selector: 'app-core-value',
  templateUrl: './core-value.component.html',
  styleUrls: ['./core-value.component.scss']
})
export class CoreValueComponent {
  @Input() coreValue: CoreValueModel | null |undefined
  @Input() listCoreValue: CoreValueModel[] | null |undefined;

}
