// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-dashboard',
//   imports: [],
//   templateUrl: './dashboard.component.html',
//   styleUrl: './dashboard.component.scss'
// })
// export class DashboardComponent {

// }

import { Component, OnInit } from '@angular/core';
import { NotificationsWidget } from './components/notificationswidget';
import { StatsWidget } from './components/statswidget';
import { RecentSalesWidget } from './components/recentsaleswidget';
import { BestSellingWidget } from './components/bestsellingwidget';
import { RevenueStreamWidget } from './components/revenuestreamwidget';
import { TransfersTableComponent } from './components/transfers-table/transfers-table.component';
import { TransfersService } from '../../shared/services/transfers.service';

@Component({
    selector: 'app-dashboard',
    imports: [StatsWidget, RecentSalesWidget, BestSellingWidget, RevenueStreamWidget, NotificationsWidget, TransfersTableComponent],
    template: `
        <div class="grid grid-cols-12 gap-8">
            <!-- <app-stats-widget class="contents" />
            <div class="col-span-12 xl:col-span-6">
                <app-recent-sales-widget />
                <app-best-selling-widget />
            </div>
            <div class="col-span-12 xl:col-span-6">
                <app-revenue-stream-widget />
                <app-notifications-widget />
            </div> -->
            <div class="col-span-12">
                <app-transfers-table />
            </div>
        </div>
    `,
    styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
    constructor(private transfersService: TransfersService){}
    ngOnInit(): void {
        this.transfersService.fetchTransfers()
    }
}
