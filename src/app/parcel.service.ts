import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParcelService {

  private parcels = new BehaviorSubject<any>([]);

  constructor() { }

  getParcels() {
    return this.parcels.asObservable();
  }

  addParcel(parcel: any) {
    const currentParcels = this.parcels.value;
    this.parcels.next([...currentParcels, parcel]);
  }

}