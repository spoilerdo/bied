import { UserService } from './../../@core/services/user.service';
import { ResearchService } from './../../@core/services/research/research.service';
import { Component, OnInit, Input } from '@angular/core';
import { Research } from '../../@core/models/research';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'research-details',
  templateUrl: './research-details.component.html',
  styleUrls: ['./research-details.component.scss'],
})
export class ResearchDetailsComponent implements OnInit {
  private paramSubscription: Subscription;
  research$: Observable<Research>;
  researchOwner: string;
  stats: string[][] = [];

  constructor(private route: ActivatedRoute, private service: ResearchService, private userService: UserService) {}

  ngOnInit(): void {
    this.paramSubscription = this.route.paramMap.subscribe(this.onParamsChange.bind(this));
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }

  onParamsChange(params: ParamMap) {
    const researchIdParam = params.get('id');

    // Only load research if it isn't already loaded
    this.research$.subscribe(r => {
      if (r.id !== researchIdParam) {
        this.loadResearch(researchIdParam);
      }
    })
  }

  //TODO: need fix loadInfo not working as it should because of the userservice
  async loadResearch(id: string) {
    this.research$ = await this.service.getResearch(id);
    this.research$.subscribe(r => {
      this.loadInfo(r);
    })
  }

  async loadInfo(research: Research) {
    const ownerName = await this.userService.getFullnameById(parseInt(research.ownerId));
    this.stats.push(['Owner', ownerName]);
    this.stats.push(['Start date', moment(research.startDate).format('DD MMMM YYYY')]);
    this.stats.push(['End date', moment(research.endDate).format('DD MMMM YYYY')]);
  }
}
