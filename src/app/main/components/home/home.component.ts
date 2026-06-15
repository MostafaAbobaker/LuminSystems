import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  loaded:boolean=true;
  activeIndex: any = 0; 
  isPartner:boolean=false;

  ngOnInit(): void {
    
    setTimeout(()=>{ this.loaded=false;},1000)

    setTimeout(()=>{ this.openMyDialog() ;},2000)

    
   
  }
  //Handle active indicator in carsouel
  handleCarouselSlide(event: any) {this.activeIndex = event.to;}

  toggleButton(status:boolean){
    this.isPartner=status;
  }
  openMyDialog() {
    let btn=document.getElementById("btnnnn");
    btn?.click();
    //let myDialog = <any>document.getElementById("eventModal");
    //myDialog?.showModal();
}

}
