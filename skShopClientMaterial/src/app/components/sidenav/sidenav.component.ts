import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

const SMALL_SCREENS_BREAKpOINT = 768;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  isScreenSmall!: boolean; 

  constructor(private breakpointObserver: BreakpointObserver,
    public cartService: CartService) { 
  }
  ngOnInit(): void {
    this.breakpointObserver.observe([
      `(max-width: ${SMALL_SCREENS_BREAKpOINT}px)`
    ])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      })
  }
 
}