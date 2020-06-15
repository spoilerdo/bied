import { Component, OnInit, Input } from '@angular/core';
import { Research } from '../models/research';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ResearchProvider } from '../providers/research.provider';
import { Subscription } from 'rxjs';
import * as moment from 'moment';
import { UserProvider } from '../providers/user.provider';

@Component({
  selector: 'research-details',
  templateUrl: './research-details.component.html',
  styleUrls: ['./research-details.component.scss'],
})
export class ResearchDetailsComponent implements OnInit {
  private paramSubscription: Subscription;
  research: Research;
  researchOwner: string;
  stats: string[][] = [];

  constructor(private route: ActivatedRoute, private service: ResearchProvider, private userService: UserProvider) {}

  ngOnInit(): void {
    this.paramSubscription = this.route.paramMap.subscribe(this.onParamsChange.bind(this));
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }

  onParamsChange(params: ParamMap) {
    const researchIdParam = params.get('id');

    // Only load research if it isn't already loaded
    if (this.research?.id !== researchIdParam) {
      this.loadResearch(researchIdParam);
    }
  }

  async loadResearch(id: string) {
    const research = await this.service.getResearch(id);
    this.research = research;
    this.loadInfo(research);
  }

  async loadInfo(research: Research) {
    const ownerName = await this.userService.getFullnameById(parseInt(research.ownerId));
    this.stats.push(['Owner', ownerName]);
    this.stats.push(['Start date', moment(research.startDate).format('DD MMMM YYYY')]);
    this.stats.push(['End date', moment(research.endDate).format('DD MMMM YYYY')]);
  }
}
