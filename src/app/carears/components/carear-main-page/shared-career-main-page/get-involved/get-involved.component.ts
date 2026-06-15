import { Component, Input } from '@angular/core';
import { GetInvolvedSectionModel } from 'src/app/shared/models/career-page.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-get-involved',
  templateUrl: './get-involved.component.html',
  styleUrls: ['./get-involved.component.scss']
})
export class GetInvolvedComponent {
  apiUrl: string = environment.baseApiUrl;
  @Input() GetInvolvedSection: GetInvolvedSectionModel| null |undefined;

}
