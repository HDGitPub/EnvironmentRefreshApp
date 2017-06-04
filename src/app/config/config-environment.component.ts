import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Config } from './config'
import { ConfigService } from './config.service'

@Component({
  selector: 'app-config-environment',
  templateUrl: './config-environment.component.html',
  styleUrls: ['./config-environment.component.css']
})
export class ConfigEnvironmentComponent implements OnInit {
  config: Config;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private configService: ConfigService
  ) { }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.configService.getConfig(params['environment']))
    .subscribe(config => this.config = config);
  }

}
