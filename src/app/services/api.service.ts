import { Injectable } from '@angular/core';
import { Api } from '../models/api.model';
import * as ApiModels from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apis = [
    ApiModels.NUMBER_VERIFICATION_API,
    ApiModels.DEVICE_LOCATION_API,
    ApiModels.QUALITY_ON_DEMAND_API,
    ApiModels.DEVICE_REACHABILITY_STATUS_API,
    ApiModels.DEVICE_SWAP,
    ApiModels.SIM_SWAP_API,
    ApiModels.DEVICE_ROAMING_STATUS,
    ApiModels.DEVICE_IDENTIFIER,
    ApiModels.TRAFFIC_INFLUENCE,
    ApiModels.SLICE_BOOKING,
    ApiModels.REGION_DEVICE_COUNT,
    ApiModels.POPULATION_DENSITY_DATA,
    ApiModels.DEVICE_VISIT_LOCATION,
    ApiModels.MOST_FREQUENT_LOCATION,
    ApiModels.DEVICE_QUALITY_INDICATOR,
    ApiModels.DEVICE_DATA_VOLUME,
    ApiModels.SUBSCRIPTION_STATUS,
    ApiModels.DEDICATED_NETWORKS
  ];

  getAllApis(): Api[] {
    return this.apis;
  }

  getAllApiNames(): string[]{
    return this.apis.map(api => api["name"]);
  }

  getFeaturedApis(): Api[] {
    return this.apis.slice(0, 5);
  }

  getApiById(id: string): Api | undefined {
    return this.apis.find(api => api.id === id);
  }
}