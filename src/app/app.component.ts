import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';;
import { selectConfigState } from './data/state/selectors/config.selector';
import { ConfigState } from './data/state/reducers/config.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  isLoading!: boolean;

  title = 'retoQueue';
  constructor( private store: Store ){}
  
  ngOnInit(){
    this.store.select(selectConfigState).subscribe((data:ConfigState) => {
      this.isLoading = data.isLoaderShown;
    });
  }
}
