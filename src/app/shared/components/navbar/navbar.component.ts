import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isScrolled = false;
  @Output() sideMenuToggled = new EventEmitter<boolean>(false);
  sideMenuIndicator:boolean=false;

  constructor(private scrollService: LayoutService,private router: Router) { }

  ngOnInit() {
    this.scrollService.getScrollPosition().subscribe((position) => {
      this.isScrolled = position >= 10;
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.scrollService.updateScrollPosition(scrollPosition);
  }

  toggleSideMenu() {
    this.sideMenuIndicator = !this.sideMenuIndicator;
    this.sideMenuToggled.emit(this.sideMenuIndicator);
  }

  openURL(event:Event,module:string,url:string){
    event.stopPropagation();
    this.router.navigate(['/'+module+'/'+url]);
  }


}
