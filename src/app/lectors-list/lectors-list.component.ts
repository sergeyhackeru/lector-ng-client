import { Component, OnInit } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-lectors-list',
  templateUrl: './lectors-list.component.html',
  styleUrls: ['./lectors-list.component.scss']
})
export class LectorsListComponent implements OnInit {

  apiData  : any;
  filterTerm!: string;
  
  constructor(private http: HttpClient) {
    
  }
   
  ngOnInit(): void {
    this.http.get('http://localhost/simpl/lectors')
    .subscribe((response)=>{
      console.log(response)
      this.apiData = response;
    })
  }

  
}
