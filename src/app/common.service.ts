import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  /**
   * @param {number} range
   * @param {string} [type]
   * @memberOf VehicleOverviewComponent
   * @description 获取今天及前后天
   */
  getRangeDate( range: number, type?: string ) {
    const formatDate = ( time: any ) => {
      // 格式化日期，获取今天的日期
      const Dates = new Date( time );
      const year: number = Dates.getFullYear();
      const month: any = ( Dates.getMonth() + 1 ) < 10 ? '0' + ( Dates.getMonth() + 1 ) : ( Dates.getMonth() + 1 );
      const day: any = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
      return year + '-' + month + '-' + day;
    };
    const now = formatDate( new Date().getTime() ); // 当前时间
    const resultArr: Array<any> = [];
    let changeDate: string;
    if ( range ) {
      if ( type ) {
        if ( type === 'one' ) {
          changeDate = formatDate( new Date().getTime() + ( 1000 * 3600 * 24 * range ) );
          console.log( changeDate );
        }
        if ( type === 'more' ) {
          if ( range < 0 ) {
            for ( let i = Math.abs( range ); i >= 0; i-- ) {
              resultArr.push( formatDate( new Date().getTime() + ( -1000 * 3600 * 24 * i ) ) );
              console.log( resultArr );
            }
          } else {
            for ( let i = 1; i <= range; i++ ) {
              resultArr.push( formatDate( new Date().getTime() + ( 1000 * 3600 * 24 * i ) ) );
              console.log( resultArr );
            }
          }

        }
      } else {
        changeDate = formatDate( new Date().getTime() + ( 1000 * 3600 * 24 * range ) );
        console.log( changeDate );
      }
    }
  }

}
