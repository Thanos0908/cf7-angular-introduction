import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive-example',
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {
  users: Person[] = 
  [{
    "givenName": "Stormy",
    "surName": "Shilburne",
    "email": "sshilburne0@histats.com",
    "age": 1,
    "address": "Room 403"
  }, {
    "givenName": "Juan",
    "surName": "Heggison",
    "email": "jheggison1@github.com",
    "age": 2,
    "address": "20th Floor"
  }, {
    "givenName": "Juliana",
    "surName": "Tippetts",
    "email": "jtippetts2@jimdo.com",
    "age": 3,
    "address": "Suite 11"
  }, {
    "givenName": "Sonia",
    "surName": "Furmagier",
    "email": "sfurmagier3@techcrunch.com",
    "age": 4,
    "address": "10th Floor"
  }, {
    "givenName": "Francis",
    "surName": "MacKerley",
    "email": "fmackerley4@umich.edu",
    "age": 5,
    "address": "Apt 733"
  }, {
    "givenName": "Mayne",
    "surName": "O'Heneghan",
    "email": "moheneghan5@psu.edu",
    "age": 6,
    "address": "4th Floor"
  }, {
    "givenName": "Darcy",
    "surName": "Leabeater",
    "email": "dleabeater6@archive.org",
    "age": 7,
    "address": "Apt 503"
  }, {
    "givenName": "Bryn",
    "surName": "Freiberg",
    "email": "bfreiberg7@dot.gov",
    "age": 8,
    "address": "11th Floor"
  }, {
    "givenName": "Ginelle",
    "surName": "Seatter",
    "email": "gseatter8@xing.com",
    "age": 9,
    "address": "Suite 97"
  }, {
    "givenName": "Goldarina",
    "surName": "Naisbit",
    "email": "gnaisbit9@epa.gov",
    "age": 10,
    "address": "Apt 1233"
  }, {
    "givenName": "Tamarah",
    "surName": "Pock",
    "email": "tpocka@twitter.com",
    "age": 11,
    "address": "Apt 1749"
  }, {
    "givenName": "Tara",
    "surName": "Brenton",
    "email": "tbrentonb@cnet.com",
    "age": 12,
    "address": "PO Box 77729"
  }, {
    "givenName": "Jenifer",
    "surName": "Wakelam",
    "email": "jwakelamc@netlog.com",
    "age": 13,
    "address": "PO Box 52946"
  }, {
    "givenName": "Gunilla",
    "surName": "Tran",
    "email": "gtrand@springer.com",
    "age": 14,
    "address": "Apt 1443"
  }, {
    "givenName": "Alonzo",
    "surName": "Frobisher",
    "email": "afrobishere@homestead.com",
    "age": 15,
    "address": "Suite 54"
  }, {
    "givenName": "Tania",
    "surName": "Oldman",
    "email": "toldmanf@reddit.com",
    "age": 16,
    "address": "Suite 7"
  }, {
    "givenName": "Arlinda",
    "surName": "Blunsom",
    "email": "ablunsomg@acquirethisname.com",
    "age": 17,
    "address": "PO Box 18942"
  }, {
    "givenName": "Elihu",
    "surName": "Scarsbrick",
    "email": "escarsbrickh@vk.com",
    "age": 18,
    "address": "3rd Floor"
  }, {
    "givenName": "Sarina",
    "surName": "Mollindinia",
    "email": "smollindiniai@eepurl.com",
    "age": 19,
    "address": "Suite 63"
  }, {
    "givenName": "Missie",
    "surName": "Niven",
    "email": "mnivenj@ucsd.edu",
    "age": 20,
    "address": "Suite 56"
  }]

}
