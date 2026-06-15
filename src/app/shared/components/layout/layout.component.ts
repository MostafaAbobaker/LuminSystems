import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  sideMenuToggled:Boolean=false;
  sideMenuToggledMobile:Boolean=false;
  isSmallScreen = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenSize();
  }
  
  handleSideMenuToggledChange(value: boolean): void {
    this.sideMenuToggled = value;
  }
  closeSideMenu(){
    this.sideMenuToggled =false
  }
  toggleSideMenu(event: any): void {
    if (this.sideMenuToggledMobile) {
      this.sideMenuToggled = event;
    } else {
      this.sideMenuToggled = !this.sideMenuToggled;
    }
  }
  checkScreenSize(): void {
    const screenWidth = window.innerWidth;

    // Toggle classes based on screen size and sideMenuToggled value
    if (this.sideMenuToggled && screenWidth < 768) {
      this.isSmallScreen = true;
    } else {
      this.isSmallScreen = false;
    }
  }

  ngOnChanges(): void {
    this.checkScreenSize();
  }

}
