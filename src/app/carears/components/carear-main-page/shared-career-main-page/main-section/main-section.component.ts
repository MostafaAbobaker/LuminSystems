import { Component, Input } from '@angular/core';
import { MainSectionGetModel } from 'src/app/shared/models/career-page.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent {
  apiUrl: string = environment.baseApiUrl;
  @Input() mainSection: MainSectionGetModel | null | undefined;
}
