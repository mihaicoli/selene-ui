import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DeviceAttribute, DeviceService} from '../../device.service';

@Component({
    selector: 'account-device-geography',
    templateUrl: './geography.component.html',
    styleUrls: ['./geography.component.scss']
})
export class GeographyComponent implements OnInit {
    @Input() currentValue: DeviceAttribute;
    public geographies$ = new Observable<DeviceAttribute[]>();
    public dialogInstructions = '';

    constructor(private deviceService: DeviceService) {
    }

    ngOnInit() {
        this.geographies$ = this.deviceService.getGeographies();
    }

}