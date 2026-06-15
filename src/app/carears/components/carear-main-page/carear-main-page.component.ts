import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { CareerPageModel } from 'src/app/shared/models/career-page.model';
import { JobService } from 'src/app/shared/services/job.service';

@Component({
  selector: 'app-carear-main-page',
  templateUrl: './carear-main-page.component.html',
  styleUrls: ['./carear-main-page.component.scss']
})
export class CarearMainPageComponent implements OnInit {
  loaded: boolean = true;
  careerPageContent: CareerPageModel | null | undefined
  constructor(private jobService: JobService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.jobService.getCareerPageContent().subscribe(careerPageContent => {
      this.careerPageContent = careerPageContent
      this.loaded = false;
    })
  }
}
