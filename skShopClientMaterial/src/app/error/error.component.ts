import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  userMessage!: string | null;
  status!: string | null;
  url!: string | null;
  statusCode!: string | null;
  statusText!: string | null;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userMessage = this.route.snapshot.paramMap.get('message');
    let code = this.route.snapshot.paramMap.get('statusCode');
    if (code !== "0") {
      this.statusCode = code;
    }else{
      this.statusCode = "404";
    }
    this.url = this.route.snapshot.paramMap.get('url');
    this.status = this.route.snapshot.paramMap.get('status');
    this.statusText = this.route.snapshot.paramMap.get('statusText');
  }

}
