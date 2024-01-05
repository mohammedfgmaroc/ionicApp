import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private firestore: AngularFirestore) {}

  // Get a list of popular cities with images
  getPopularCities(): Observable<any[]> {
    return this.firestore.collection('1').valueChanges();
  }

  // Get details of a specific city
  getCityDetails(cityId: string): Observable<any> {
    return this.firestore.doc(`1/${cityId}`).valueChanges();
  }
  // Add a new city to the collection with a manually assigned numeric ID
  addCity(city: any, numericId: number): Promise<any> {
    const newCityId = numericId.toString(); // Convert to string for consistency
    return this.firestore.collection('1').doc(newCityId).set(city);
  }

  // Update an existing city in the collection
  updateCity(cityId: string, data: any): Promise<void> {
    return this.firestore.doc(`1/${cityId}`).update(data);
  }
  // Delete a city from the collection
  deleteCity(cityId: number): Promise<void> {
    return this.firestore.doc(`1/${cityId}`).delete();
  }
}
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CityService {
//     private cities = [
//         { id: 1, name: 'Oujda', province: 'Oujda Angad', photo: 'assets/imgs/oujda.jpg', lat: 34.689404, lng: -1.912823 },
//         { id: 2, name: 'Beni-Mellal', province: 'Haouz', photo: 'assets/imgs/benimellal.jpeg', lat: 32.336998652 , lng: -6.356498574 },
//         { id: 3, name: 'CasaBlanca', province: 'Casa Setat', photo: 'assets/imgs/casa.jpeg', lat: 33.59661, lng: -7.61889 },
//         { id: 4, name: 'Rabat', province: 'Rabat Skhirat', photo: 'assets/imgs/rabat.jpeg', lat: 34.01791, lng: -6.83612 },
//         { id: 5, name: 'Marrakech', province: 'Marrakech Safi', photo: 'assets/imgs/marrakech.jpeg', lat: 31.63383, lng: -8.00222 },
//         { id: 6, name: 'Tanger', province: 'Tanger tetouan', photo: 'assets/imgs/tanger.jpeg', lat: 35.76727 , lng: -5.79975 },
//         { id: 7, name: 'Tetouan', province: 'Tanger tetouan', photo: 'assets/imgs/tetouan.jpeg', lat: 35.57786, lng: -5.35671 },
//         { id: 8, name: 'Berkane', province: 'Berkane Nador', photo: 'assets/imgs/berkane.jpeg', lat: 34.92807, lng: -2.32864 },
//         { id: 9, name: 'Nador', province: 'Berkane Nador', photo: 'assets/imgs/nador.jpeg', lat: 35.18076, lng: -2.92262 },
//         { id: 10, name:'Kenitra', province: 'Kenitra gharb', photo: 'assets/imgs/kenitra.jpeg', lat: 34.25949, lng: -6.58484 },
//         // Add more cities as needed
//       ];
//     getAllCities(): any[] {
//         return this.cities;
//     }
    
//     getCityById(id: number): any {
//         return this.cities.find(city => city.id === id);
//     }
// }


//firebase :
// export class CityService {

//   constructor(private firestore: AngularFirestore) {}

//   // Get a list of popular cities with images
//   getPopularCities(): Observable<any[]> {
//     return this.firestore.collection('1').valueChanges();
//   }

//   // Get details of a specific city
//   getCityDetails(cityId: string): Observable<any> {
//     return this.firestore.doc(`1/${cityId}`).valueChanges();
//   }
//   addCities() {
//     const cities = [
//       { id: 2, name: 'Beni-Mellal', province: 'Haouz', photo1: 'https://t4.ftcdn.net/jpg/04/15/59/09/240_F_415590908_ryiNRbBvgpQ90q67QLvu7brsdY9z1sgj.jpg', photo2: 'https://t4.ftcdn.net/jpg/02/90/98/39/240_F_290983924_9ijC7ERPK3EqN6OKUjpu8HbIoH1Zsbzs.jpg', description: 'Beni-Mellal, nestled in the Haouz province, captivates visitors with its picturesque landscapes and vibrant culture. The city, with its blend of historical charm and modern amenities, offers a tranquil escape. Explore the beauty of Beni-Mellal, from its scenic views to rich traditions.', lat: 32.336998652, lng: -6.356498574 },
//       { id: 3, name: 'CasaBlanca', province: 'Casa Setat', photo1: 'https://t4.ftcdn.net/jpg/01/93/94/41/240_F_193944144_Wdf86nigxk08w1cGsX1bSN5JkmSCCTNZ.jpg', photo2: 'https://t3.ftcdn.net/jpg/01/89/39/90/240_F_189399085_j9jLDR5LHlRta7mgTCPAr26PnOm9bxbA.jpg', description: 'Casablanca, located in the Casa Setat province, is Morocco\'s economic hub and a city of contrasts. From its modern architecture to historic landmarks, Casablanca boasts a cosmopolitan atmosphere. Immerse yourself in the lively energy of this dynamic city.', lat: 33.59661, lng: -7.61889 },
//       { id: 4, name: 'Rabat', province: 'Rabat Skhirat', photo1: 'https://t4.ftcdn.net/jpg/02/30/13/97/240_F_230139798_UVfc30xSLxWqczbLb6QaQ170wues7d0S.jpg', photo2: 'https://t3.ftcdn.net/jpg/01/34/09/44/240_F_134094492_J4jpQ2W7cwyniMCHxMcACxLJYUfWCVLL.jpg', description: 'Rabat, situated in the Rabat Skhirat province, is the capital city of Morocco. With its historic monuments, governmental institutions, and cultural heritage, Rabat offers a blend of tradition and modernity. Discover the political and cultural heart of the nation in Rabat.', lat: 34.01791, lng: -6.83612 },
//       { id: 5, name: 'Marrakech', province: 'Marrakech Safi', photo1: 'https://t3.ftcdn.net/jpg/01/90/39/06/240_F_190390654_a8Z6IiHW1mBWSjXMjhCsMdx91J5HMhYn.jpg', photo2: 'https://t3.ftcdn.net/jpg/02/31/14/10/240_F_231141068_W27YkU6dMSP1ImkYNRCc5G2XNDgnGnAc.jpg', description: 'Marrakech, in the Marrakech Safi province, is a vibrant oasis of colors, aromas, and sounds. Known for its bustling markets, historic medina, and iconic landmarks, Marrakech is a sensory delight. Immerse yourself in the magic of this imperial city.', lat: 31.63383, lng: -8.00222 },
//       { id: 6, name: 'Tanger', province: 'Tanger tetouan', photo1: 'https://t4.ftcdn.net/jpg/02/30/27/75/240_F_230277502_lVnQnE39sAc3PDf6NqjU9Ei3eNQoreYS.jpg', photo2: 'https://t3.ftcdn.net/jpg/05/05/00/24/240_F_505002472_dooUemB0yCRYxWZqIDuAVGx5WK7ULbR4.jpg', description: 'Tanger, located in the Tanger Tetouan province, is a coastal gem with a unique blend of European and Moroccan influences. Explore its historic medina, enjoy panoramic views of the Strait of Gibraltar, and experience the cultural fusion that defines Tanger.', lat: 35.76727, lng: -5.79975 },
//       { id: 7, name: 'Tetouan', province: 'Tanger tetouan', photo1: 'https://t4.ftcdn.net/jpg/03/06/67/15/240_F_306671575_d6Uo4wFYl7dfVuWLmWpg4rco5pjfRHau.jpg', photo2: 'https://t4.ftcdn.net/jpg/01/70/88/99/240_F_170889915_VVftUHjlH55j5AQ4ZvBdO9OBb02ua12v.jpg', description: 'Tetouan, nestled in the Tanger Tetouan province, is a city of authenticity and heritage. Known for its well-preserved medina and Andalusian influence, Tetouan invites visitors to wander through its narrow streets and discover the charm of northern Morocco.', lat: 35.57786, lng: -5.35671 },
//       { id: 9, name: 'Nador', province: 'Berkane Nador', photo1: 'https://t4.ftcdn.net/jpg/02/29/80/69/240_F_229806992_5ISpGkYeSKAZbsmmrFgq4qTCncqLKloF.jpg', photo2: 'https://t4.ftcdn.net/jpg/02/18/39/73/240_F_218397371_U2lzGfdV4EGRS198qsI5l14sx1aruKYF.jpg', description: 'Nador, also part of the Berkane Nador province, is a coastal city known for its Mediterranean charm. Explore the seaside promenade, indulge in fresh seafood, and experience the laid-back atmosphere that defines Nador.', lat: 35.18076, lng: -2.92262 },
//       { id: 10, name: 'Kenitra', province: 'Kenitra gharb', photo1: 'https://t4.ftcdn.net/jpg/00/79/19/53/240_F_79195318_rf1JvREdSWNdi5up0wV3ynoTfNfQwz4e.jpg', photo2: 'https://t4.ftcdn.net/jpg/04/42/97/93/240_F_442979304_yIOKY3HCAmcQK6pU1ctZi0j7NGJKoZhd.jpg', description: 'Kenitra, situated in the Kenitra Gharb province, is a city with a rich history and strategic importance. From its historic Kasbah to modern developments, Kenitra invites visitors to explore its cultural heritage and appreciate its role in Morocco\'s history.', lat: 34.25949, lng: -6.58484 },
//     ];

//     const batch = this.firestore.firestore.batch();

//     cities.forEach(city => {
//       const docRef = this.firestore.collection('1').doc(city.id.toString());
//       batch.set(docRef.ref, city);
//     });

//     return batch.commit();
//   }
// }