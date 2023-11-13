import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private httpClient: HttpClient) { }

  public getNumberOfProducts() {
    return this.httpClient.get("http://localhost:9090/NumberOfProducts");
  }

  public getNumberOfRegularUsers(){
    return this.httpClient.get("http://localhost:9090/NumberOfRegularUsers", { responseType: 'text' });
  }
  public getNumberOfAdminUsers(){
    return this.httpClient.get("http://localhost:9090/NumberOfAdminUsers", { responseType: 'text' });
  }
  public getNumberOfUsersWithBothRoless(){
    return this.httpClient.get("http://localhost:9090/NumberOfUsersWithBothRoles", { responseType: 'text' });
  }
  public getTotalAmountsOfAllOrders(){
    return this.httpClient.get("http://localhost:9090/TotalAmountsOfAllOrders", { responseType: 'text' });
  }

  public getTotalAmountsOfDelivredOrders(){
    return this.httpClient.get("http://localhost:9090/TotalAmountsOfDelivredOrders", { responseType: 'text' });
  }

  public getTotalAmountsOfPlacedOrders(){
    return this.httpClient.get("http://localhost:9090/TotalAmountsOfPlacedOrders", { responseType: 'text' });
  }
  public getNumberOfOrders(){
    return this.httpClient.get("http://localhost:9090/NumberOfOrders", { responseType: 'text' });
  }
}
