import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  name: string;
  data: string;

  constructor(
    private route: ActivatedRoute,
    private commonService: CommonService,
  ) { 
    
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      console.log(this.name);
    });
    this.commonService.getRangeDate(1,'one');
  }

}
