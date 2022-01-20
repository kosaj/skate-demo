import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDrawer } from '@angular/material/sidenav';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit {
  background: ThemePalette = undefined;

  mobile$ = this.breakpointObserver
    .observe(['(min-width: 40em)'])
    .pipe(map((result) => !result.matches));

  @ViewChild('drawer', { static: true, read: MatDrawer })
  private _drawer!: MatDrawer;

  constructor(private readonly breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {}

  toggle(): void {
    this._drawer.toggle();
  }
}
