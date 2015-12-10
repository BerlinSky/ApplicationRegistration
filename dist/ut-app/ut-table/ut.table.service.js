(function(module) {

  "use strict";

  var tableDataService = function() {

    var addArtist = function(artist) {
       artistList.push(artist);
    };

    var removeArtist = function(artist) {
      for (var i = 0; i < artistList.length; i++) {
        if (artistList[i] === artist) {
          artistList.splice(i, 1);
          break;
        }
      }
    };

    var artistList = [
    {
      "appId": "1001",
      "firstName": "Elliott",
      "lastName": "Drake",
      "company": "MaurisSagittisPlaceratLLCListCanBeAVeryLongStringOfWordsSometimesWeCannotDoAnythingAboutIt",
      "address": "P.O. Box 894, 2811 Vestibulum Road",
      "city": "Koekelberg",
      "zipCode": "56261",
      "country": "Nauru",
      "telephone": "(819) 662-2193",
      "rowId": "0F1A1EDD-6A1E-3A0F-F2AF-A0C1E73B7715"
    },
    {
      "appId": "1001",
      "firstName": "Velma",
      "lastName": "Lacey",
      "company": "Consectetuer PC",
      "address": "6636 Sem St.",
      "city": "Erchie",
      "zipCode": "3046",
      "country": "Slovenia",
      "telephone": "(129) 343-6565",
      "rowId": "756DD7EC-68E9-AE84-EBE5-A2F5966389B7"
    },
    {
      "appId": "1001",
      "firstName": "Adrian",
      "lastName": "Aileen",
      "company": "Malesuada Fames LLP",
      "address": "7339 In Street",
      "city": "Stockerau",
      "zipCode": "09536",
      "country": "Canada",
      "telephone": "(987) 845-0994",
      "rowId": "88F7137B-370C-970F-A1C3-E54447DB41E3"
    },
    {
      "appId": "1001",
      "firstName": "Chandler",
      "lastName": "Stacey",
      "company": "Aenean Institute",
      "address": "382-6550 Cras St.",
      "city": "Overrepen",
      "zipCode": "88008",
      "country": "Mongolia",
      "telephone": "(833) 732-7596",
      "rowId": "69FD745A-D4BB-E4D2-9E84-D715E0E225E4"
    },
    {
      "appId": "1001",
      "firstName": "Orlando",
      "lastName": "Sonya",
      "company": "Vitae Inc.",
      "address": "1497 Ante Street",
      "city": "Olathe",
      "zipCode": "467437",
      "country": "Angola",
      "telephone": "(704) 707-9272",
      "rowId": "78A5AE5A-0592-6E00-D00C-B8C2D9048025"
    },
    {
      "appId": "1001",
      "firstName": "Willow",
      "lastName": "Stephanie",
      "company": "Et Magnis Dis Limited",
      "address": "Ap #838-1726 Auctor, Street",
      "city": "Molenbeersel",
      "zipCode": "9068",
      "country": "Liechtenstein",
      "telephone": "(467) 945-1060",
      "rowId": "14655C94-E698-DAF0-8A09-B2ACF5AC4CC2"
    },
    {
      "appId": "1002",
      "firstName": "Mariko",
      "lastName": "Gemma",
      "company": "Pellentesque Corp.",
      "address": "3867 Suspendisse Rd.",
      "city": "Grand Falls",
      "zipCode": "5519",
      "country": "Peru",
      "telephone": "(629) 763-5322",
      "rowId": "A239BABB-D9E9-7E61-3187-F96186FAB103"
    },
    {
      "appId": "1002",
      "firstName": "Salvador",
      "lastName": "Jacqueline",
      "company": "Fringilla Euismod Enim PC",
      "address": "Ap #625-6972 Nunc. Road",
      "city": "Pitlochry",
      "zipCode": "25844",
      "country": "Czech Republic",
      "telephone": "(628) 454-9147",
      "rowId": "73163DA0-2A62-2848-E647-81AA8CB0A986"
    },
    {
      "appId": "1002",
      "firstName": "Martena",
      "lastName": "Signe",
      "company": "Vivamus Incorporated",
      "address": "425-7212 A, St.",
      "city": "Socchieve",
      "zipCode": "8118AP",
      "country": "Chad",
      "telephone": "(548) 562-2753",
      "rowId": "A266FAF1-34CB-B233-C06C-A7FAA9528815"
    },
    {
      "appId": "1002",
      "firstName": "Rhiannon",
      "lastName": "Graiden",
      "company": "Lectus Limited",
      "address": "P.O. Box 784, 9826 Eget, Rd.",
      "city": "Rotterdam",
      "zipCode": "02756",
      "country": "Germany",
      "telephone": "(998) 107-9406",
      "rowId": "1FC158EE-815A-1A97-D07F-958134806EDA"
    },
    {
      "appId": "1002",
      "firstName": "Vivien",
      "lastName": "Astra",
      "company": "Amet Nulla Donec Associates",
      "address": "4404 Nibh St.",
      "city": "Neustrelitz",
      "zipCode": "DT7R 8SB",
      "country": "Japan",
      "telephone": "(254) 255-4268",
      "rowId": "9F75CFE2-CA37-914E-C034-7CB63B24ECD2"
    },
    {
      "appId": "1002",
      "firstName": "Aline",
      "lastName": "Quon",
      "company": "Erat Corp.",
      "address": "4816 Magna, Road",
      "city": "Whakatane",
      "zipCode": "D8 1FW",
      "country": "Czech Republic",
      "telephone": "(110) 946-7968",
      "rowId": "9B9A339C-80B8-CEF0-FE0B-4476F136B29F"
    },
    {
      "firstName": "Xanthus",
      "lastName": "Desiree",
      "company": "Ipsum Primis Associates",
      "address": "4384 Tempor Rd.",
      "city": "Rapagnano",
      "zipCode": "3974",
      "country": "Japan",
      "telephone": "(863) 190-8014",
      "rowId": "795DC0A0-07A7-AE6A-2CCE-E4F3E5045E6D"
    },
    {
      "firstName": "Wesley",
      "lastName": "Ria",
      "company": "Sagittis Placerat Cras Consulting",
      "address": "4144 Aliquam Rd.",
      "city": "Whyalla",
      "zipCode": "32995",
      "country": "Bahrain",
      "telephone": "(313) 268-0739",
      "rowId": "C6EA010D-5E58-E24B-AB4C-D621D25F5878"
    },
    {
      "firstName": "Casey",
      "lastName": "Brandon",
      "company": "Vitae Erat Vivamus PC",
      "address": "P.O. Box 649, 216 Nam Avenue",
      "city": "Cabras",
      "zipCode": "20702",
      "country": "South Africa",
      "telephone": "(182) 551-4662",
      "rowId": "7CC9B686-CB86-6DF4-A15F-6805FA26EE75"
    },
    {
      "firstName": "Brynn",
      "lastName": "Jared",
      "company": "A Inc.",
      "address": "259-3491 Sed St.",
      "city": "Latera",
      "zipCode": "27276",
      "country": "Kyrgyzstan",
      "telephone": "(910) 501-4380",
      "rowId": "AEB67B21-D846-FB01-0B20-D4AC5A547A23"
    },
    {
      "firstName": "Avram",
      "lastName": "Halla",
      "company": "Mollis Phasellus Foundation",
      "address": "P.O. Box 722, 7128 Molestie Rd.",
      "city": "Montecarotto",
      "zipCode": "79850",
      "country": "Malta",
      "telephone": "(882) 769-7293",
      "rowId": "B0A848DF-6E0C-DF82-8558-CA800C004D82"
    },
    {
      "firstName": "Hoyt",
      "lastName": "Clarke",
      "company": "Hendrerit LLP",
      "address": "P.O. Box 743, 2390 Ac Rd.",
      "city": "Landau",
      "zipCode": "19587",
      "country": "Portugal",
      "telephone": "(537) 756-0350",
      "rowId": "E0D26BE6-9266-2182-51B1-7E766C9F43EA"
    },
    {
      "firstName": "Piper",
      "lastName": "Alfonso",
      "company": "Aliquam Ultrices Iaculis Institute",
      "address": "559-4927 Vitae Rd.",
      "city": "Kanpur",
      "zipCode": "77-702",
      "country": "Saint Kitts and Nevis",
      "telephone": "(232) 868-3931",
      "rowId": "23119BFF-6F88-61BB-11FC-7AC64CE213AF"
    },
    {
      "firstName": "Minerva",
      "lastName": "Sophia",
      "company": "Sed Nunc Est Associates",
      "address": "P.O. Box 914, 8774 Et, St.",
      "city": "Augsburg",
      "zipCode": "8948ZF",
      "country": "Chile",
      "telephone": "(134) 598-5352",
      "rowId": "92528281-12A2-6DEF-D377-2465C3E48843"
    },
    {
      "firstName": "Latifah",
      "lastName": "Peter",
      "company": "Blandit Mattis Cras Corporation",
      "address": "704-772 Est St.",
      "city": "San Leucio del Sannio",
      "zipCode": "28004",
      "country": "Comoros",
      "telephone": "(485) 586-1829",
      "rowId": "072ECA18-FA57-C8E1-E0F2-38EA700D8401"
    },
    {
      "firstName": "Francesca",
      "lastName": "Malachi",
      "company": "Nisi Institute",
      "address": "P.O. Box 525, 7460 Elit, Road",
      "city": "Heusden",
      "zipCode": "62109",
      "country": "San Marino",
      "telephone": "(445) 374-3196",
      "rowId": "8FAEEE5D-53EB-0FE0-FB9A-9F90ADC5E7B0"
    },
    {
      "firstName": "Juliet",
      "lastName": "Chiquita",
      "company": "Pellentesque Industries",
      "address": "9391 Euismod St.",
      "city": "Badalona",
      "zipCode": "10678",
      "country": "Isle of Man",
      "telephone": "(854) 653-5514",
      "rowId": "78460C1B-5FAD-E11B-A7A4-70D17F200249"
    },
    {
      "firstName": "Genevieve",
      "lastName": "Roary",
      "company": "Ante Iaculis Corp.",
      "address": "9580 Augue Rd.",
      "city": "Wattrelos",
      "zipCode": "56460",
      "country": "French Southern Territories",
      "telephone": "(494) 607-1733",
      "rowId": "7042E22C-7E51-2C29-F01F-8CCA6E2A8450"
    },
    {
      "firstName": "Xavier",
      "lastName": "Stuart",
      "company": "Amet Luctus Corp.",
      "address": "491-6815 Ac St.",
      "city": "Wedel",
      "zipCode": "YT0S 0MF",
      "country": "Martinique",
      "telephone": "(229) 625-1666",
      "rowId": "12F4AA62-7954-69EC-5DC8-1C8A98825D3A"
    },
    {
      "firstName": "Ira",
      "lastName": "Aiko",
      "company": "Turpis Incorporated",
      "address": "329-5554 Ligula Rd.",
      "city": "Ansfelden",
      "zipCode": "9288",
      "country": "Zambia",
      "telephone": "(140) 690-8145",
      "rowId": "FB13CECA-819B-CFC1-5308-970B6DF39913"
    },
    {
      "firstName": "Ishmael",
      "lastName": "Seth",
      "company": "Tortor Integer Corp.",
      "address": "Ap #291-3626 Felis Road",
      "city": "Treglio",
      "zipCode": "57775",
      "country": "Macao",
      "telephone": "(510) 322-8397",
      "rowId": "9E951255-E255-30C0-960D-42E9038FADB6"
    },
    {
      "firstName": "Grady",
      "lastName": "Willow",
      "company": "Mauris Elit Industries",
      "address": "2047 At, Rd.",
      "city": "Fort Collins",
      "zipCode": "62351",
      "country": "Jersey",
      "telephone": "(380) 291-3874",
      "rowId": "FDC95E41-CD73-048F-62C4-4263C187DA3A"
    },
    {
      "firstName": "Lesley",
      "lastName": "Thaddeus",
      "company": "Arcu Foundation",
      "address": "769-8269 Ut Street",
      "city": "Longchamps",
      "zipCode": "5873",
      "country": "Haiti",
      "telephone": "(136) 435-7971",
      "rowId": "032068B7-68C0-604E-70A3-F728996D722C"
    },
    {
      "firstName": "Carlos",
      "lastName": "Aileen",
      "company": "Sapien Aenean Associates",
      "address": "Ap #793-3569 Id, Road",
      "city": "Fogo",
      "zipCode": "3291UQ",
      "country": "Honduras",
      "telephone": "(326) 817-0067",
      "rowId": "7A51E72E-F729-8604-066D-0982925A04BC"
    },
    {
      "firstName": "Malik",
      "lastName": "Thor",
      "company": "Tellus Aenean Ltd",
      "address": "9230 Lorem Street",
      "city": "Salles",
      "zipCode": "8722",
      "country": "Botswana",
      "telephone": "(363) 273-5739",
      "rowId": "11F9E600-FC4C-FEA3-2370-48BE2A450B60"
    },
    {
      "firstName": "Elijah",
      "lastName": "Chiquita",
      "company": "Metus Urna Incorporated",
      "address": "2817 Mi Road",
      "city": "Bairnsdale",
      "zipCode": "10558",
      "country": "Brazil",
      "telephone": "(146) 280-0775",
      "rowId": "41502D27-0A91-B281-381F-8BD026CCD52C"
    },
    {
      "firstName": "Liberty",
      "lastName": "Michael",
      "company": "At Sem Molestie Consulting",
      "address": "6656 Maecenas St.",
      "city": "Ayr",
      "zipCode": "502443",
      "country": "Bouvet Island",
      "telephone": "(284) 557-7803",
      "rowId": "5BA0443C-2CC0-506A-16C7-A217CC9481AD"
    },
    {
      "firstName": "Candace",
      "lastName": "Graiden",
      "company": "Semper Cursus Integer Ltd",
      "address": "749-3515 Sed Road",
      "city": "San Fratello",
      "zipCode": "455291",
      "country": "Mali",
      "telephone": "(158) 603-4955",
      "rowId": "DC1BE7BD-18CD-4DC9-AD44-C8A4A8117182"
    },
    {
      "firstName": "Jenna",
      "lastName": "Dana",
      "company": "Odio Vel Est Institute",
      "address": "822-6544 Luctus Ave",
      "city": "Tongrinne",
      "zipCode": "1675",
      "country": "Venezuela",
      "telephone": "(511) 623-4672",
      "rowId": "5F06662C-F30D-F87F-FACE-BCDEC8B61387"
    },
    {
      "firstName": "Meghan",
      "lastName": "Rahim",
      "company": "Ac PC",
      "address": "P.O. Box 648, 8322 Ornare. Avenue",
      "city": "Dannevirke",
      "zipCode": "7423",
      "country": "Albania",
      "telephone": "(522) 905-3697",
      "rowId": "B634CF8B-1AB2-4DE5-DFA5-57A4E5265B58"
    },
    {
      "firstName": "Sage",
      "lastName": "Griffith",
      "company": "Adipiscing Institute",
      "address": "1903 Mi St.",
      "city": "Widooie",
      "zipCode": "M3Z 7VT",
      "country": "Italy",
      "telephone": "(270) 225-2249",
      "rowId": "F6E93AA3-6D99-C5E2-F7E6-58E19084C6BF"
    },
    {
      "firstName": "Lael",
      "lastName": "Peter",
      "company": "Elementum Sem Associates",
      "address": "Ap #945-7396 Viverra. St.",
      "city": "Buckingham",
      "zipCode": "7289",
      "country": "Pakistan",
      "telephone": "(319) 616-6217",
      "rowId": "88E7D612-5D74-97D4-CD01-FF467EEB65F7"
    },
    {
      "firstName": "Azalia",
      "lastName": "Anne",
      "company": "Arcu Company",
      "address": "P.O. Box 733, 745 Eget, Rd.",
      "city": "Saint-Médard-en-Jalles",
      "zipCode": "51102",
      "country": "Oman",
      "telephone": "(666) 253-5730",
      "rowId": "858E7998-51BB-F08F-E5F7-A9E0661EA176"
    },
    {
      "firstName": "Karina",
      "lastName": "Kitra",
      "company": "Nulla LLC",
      "address": "469-8397 Ac Rd.",
      "city": "North Cowichan",
      "zipCode": "4623",
      "country": "Latvia",
      "telephone": "(676) 809-8457",
      "rowId": "F796ED3D-0A85-3EFA-7E93-953729CC2862"
    },
    {
      "firstName": "Finn",
      "lastName": "Unity",
      "company": "Pellentesque A Facilisis Corporation",
      "address": "5717 Nullam Road",
      "city": "Tolentino",
      "zipCode": "66386",
      "country": "Cape Verde",
      "telephone": "(172) 457-7533",
      "rowId": "10FFC76D-62B8-8FD6-3203-DCBF5C93D119"
    },
    {
      "firstName": "Kennedy",
      "lastName": "Flavia",
      "company": "Orci Tincidunt Limited",
      "address": "P.O. Box 850, 6379 Tellus. Ave",
      "city": "Bad Homburg v. d. H�he",
      "zipCode": "25185-839",
      "country": "Palau",
      "telephone": "(665) 892-1355",
      "rowId": "423121DA-8E5B-A4D6-AFCF-7A3661904666"
    },
    {
      "firstName": "Amos",
      "lastName": "Jada",
      "company": "Amet Massa Limited",
      "address": "P.O. Box 694, 4597 Enim. Ave",
      "city": "Lanaken",
      "zipCode": "48563",
      "country": "American Samoa",
      "telephone": "(287) 197-5794",
      "rowId": "D95754BC-8D6D-2F8C-DD2E-F4D9E5E9E0FC"
    },
    {
      "firstName": "Rana",
      "lastName": "Erasmus",
      "company": "Molestie Tortor Nibh Industries",
      "address": "Ap #237-6649 Dictum Street",
      "city": "Vellore",
      "zipCode": "H1C 6T3",
      "country": "Sao Tome and Principe",
      "telephone": "(224) 336-3556",
      "rowId": "E613D519-151B-4F2F-D8CA-0ED9E73F5875"
    },
    {
      "firstName": "Adena",
      "lastName": "John",
      "company": "Eget Lacus Mauris Associates",
      "address": "5211 Ullamcorper, Road",
      "city": "Poggiodomo",
      "zipCode": "2086",
      "country": "Latvia",
      "telephone": "(905) 336-1314",
      "rowId": "ED265713-0F48-762B-40AE-0BE5D63888C1"
    },
    {
      "firstName": "Jemima",
      "lastName": "Sloane",
      "company": "Dis Parturient Corporation",
      "address": "5383 Vitae, Avenue",
      "city": "Nanaimo",
      "zipCode": "76267",
      "country": "Mali",
      "telephone": "(232) 329-6046",
      "rowId": "2222FCC5-F47A-4CED-7F03-F4270FC5E02D"
    },
    {
      "firstName": "Ciara",
      "lastName": "Kelsie",
      "company": "Mauris Molestie Foundation",
      "address": "Ap #742-209 Fusce Ave",
      "city": "Palagianello",
      "zipCode": "O09 2XW",
      "country": "Latvia",
      "telephone": "(152) 370-0198",
      "rowId": "3C15B731-508E-D080-20F4-4C9EA1449EAD"
    },
    {
      "firstName": "Raymond",
      "lastName": "Alyssa",
      "company": "Vulputate Dui Institute",
      "address": "Ap #123-8707 Nibh St.",
      "city": "Mascalucia",
      "zipCode": "566017",
      "country": "Ireland",
      "telephone": "(711) 431-5788",
      "rowId": "51F209DB-CE82-7A85-FB9E-9121ACA385FA"
    },
    {
      "firstName": "MacKenzie",
      "lastName": "Moses",
      "company": "Nulla LLC",
      "address": "Ap #888-4492 Semper, Ave",
      "city": "Beigem",
      "zipCode": "3055",
      "country": "Egypt",
      "telephone": "(825) 629-8933",
      "rowId": "6F1EBEEF-BD67-A7AF-6BB4-672D0A9C8580"
    },
    {
      "firstName": "Melanie",
      "lastName": "Austin",
      "company": "Est Tempor Foundation",
      "address": "P.O. Box 343, 2748 Odio Avenue",
      "city": "Hagen",
      "zipCode": "2416",
      "country": "Yemen",
      "telephone": "(284) 386-6324",
      "rowId": "552041B4-F54B-3EC5-8296-3DF190B984F9"
    },
    {
      "firstName": "Valentine",
      "lastName": "Pearl",
      "company": "Adipiscing Lobortis Risus Institute",
      "address": "761 Vivamus Rd.",
      "city": "João Pessoa",
      "zipCode": "S7W 7R2",
      "country": "Faroe Islands",
      "telephone": "(317) 832-7162",
      "rowId": "974FCE01-3B2C-ADFE-8BCF-F120047A27A9"
    },
    {
      "firstName": "Ulysses",
      "lastName": "Aileen",
      "company": "Libero Nec Ligula Incorporated",
      "address": "Ap #320-8873 Arcu. Road",
      "city": "Raigarh",
      "zipCode": "97043",
      "country": "Israel",
      "telephone": "(753) 589-6583",
      "rowId": "7C262B47-4FF2-1CD0-3109-38BBE2E3FFB3"
    },
    {
      "firstName": "Alyssa",
      "lastName": "Hayes",
      "company": "Molestie Consulting",
      "address": "Ap #677-1025 Libero Road",
      "city": "M�nchengladbach",
      "zipCode": "93113",
      "country": "Nicaragua",
      "telephone": "(691) 880-7936",
      "rowId": "7A32CA68-77B4-CD0C-1C00-C269EC76942E"
    },
    {
      "firstName": "Nasim",
      "lastName": "Ferris",
      "company": "Nulla LLC",
      "address": "7727 Egestas. Rd.",
      "city": "Germersheim",
      "zipCode": "3307",
      "country": "Belgium",
      "telephone": "(632) 447-9950",
      "rowId": "B0322501-BB4A-A558-59D8-C91C299BE0C6"
    },
    {
      "firstName": "Dale",
      "lastName": "Emily",
      "company": "Accumsan Laoreet LLP",
      "address": "Ap #922-7694 Nam Avenue",
      "city": "Solre-sur-Sambre",
      "zipCode": "16974",
      "country": "Wallis and Futuna",
      "telephone": "(763) 294-7627",
      "rowId": "4BBC106B-25C6-DEC0-B989-679F02FDBA7E"
    },
    {
      "firstName": "Marvin",
      "lastName": "Dennis",
      "company": "Cum Sociis Natoque Company",
      "address": "P.O. Box 907, 7959 Malesuada Road",
      "city": "Bellegem",
      "zipCode": "03307",
      "country": "Argentina",
      "telephone": "(343) 667-6593",
      "rowId": "699F4019-52A5-4965-ABBC-A4443CD86A8F"
    },
    {
      "firstName": "Audra",
      "lastName": "Griffith",
      "company": "Ultrices Sit Consulting",
      "address": "4383 Eu, Avenue",
      "city": "Rezzoaglio",
      "zipCode": "10404",
      "country": "Kenya",
      "telephone": "(582) 832-5847",
      "rowId": "95A743D7-30D7-E9B1-9D66-4DEB8421A815"
    },
    {
      "firstName": "Ruby",
      "lastName": "Ira",
      "company": "Mi Eleifend Egestas Institute",
      "address": "P.O. Box 503, 3422 Aliquet Street",
      "city": "Evere",
      "zipCode": "81251",
      "country": "Viet Nam",
      "telephone": "(832) 162-4172",
      "rowId": "2ABCF0C8-CF20-8F0E-3001-A6067A108F76"
    },
    {
      "firstName": "Janna",
      "lastName": "Geoffrey",
      "company": "Ac Mattis Semper Foundation",
      "address": "P.O. Box 808, 4636 Nonummy St.",
      "city": "Piovene Rocchette",
      "zipCode": "81331-602",
      "country": "Saint Lucia",
      "telephone": "(205) 877-7284",
      "rowId": "28EC9D44-1C50-CC0A-1889-022D627F3139"
    },
    {
      "firstName": "Zachery",
      "lastName": "Imani",
      "company": "Nonummy LLC",
      "address": "8548 Felis, Av.",
      "city": "Fontecchio",
      "zipCode": "60396",
      "country": "Kazakhstan",
      "telephone": "(496) 333-0706",
      "rowId": "ED52FC03-24B7-8558-EF19-A55175A198D0"
    },
    {
      "firstName": "Amena",
      "lastName": "Ariana",
      "company": "Nisi Consulting",
      "address": "208-4511 Vulputate Road",
      "city": "Aartrijke",
      "zipCode": "02012",
      "country": "Honduras",
      "telephone": "(815) 246-7566",
      "rowId": "5694407E-3B49-6450-5155-89215E184830"
    },
    {
      "firstName": "Merritt",
      "lastName": "Alana",
      "company": "Libero Inc.",
      "address": "Ap #203-1612 Sollicitudin Road",
      "city": "Rutten",
      "zipCode": "4188VP",
      "country": "Puerto Rico",
      "telephone": "(367) 225-5275",
      "rowId": "03D31C0F-D97F-CBD1-3A35-5E895B1C3407"
    },
    {
      "firstName": "Jasper",
      "lastName": "Anastasia",
      "company": "Sed Leo Cras Incorporated",
      "address": "2707 Mauris Av.",
      "city": "San José de Alajuela",
      "zipCode": "V9R 9XG",
      "country": "Burundi",
      "telephone": "(828) 589-1325",
      "rowId": "35C98C7F-8461-E9CD-4E8D-6E62BE125E9B"
    },
    {
      "firstName": "Xavier",
      "lastName": "Emmanuel",
      "company": "Mi Industries",
      "address": "211-4394 Duis Avenue",
      "city": "Châteauroux",
      "zipCode": "15644",
      "country": "Virgin Islands, United States",
      "telephone": "(983) 141-9363",
      "rowId": "4CF2EE28-F8FD-0F81-77C7-E6A5617DBA34"
    },
    {
      "firstName": "Owen",
      "lastName": "Zelenia",
      "company": "Praesent Luctus Curabitur Company",
      "address": "P.O. Box 646, 8480 Nunc St.",
      "city": "Sulzbach",
      "zipCode": "13671",
      "country": "Israel",
      "telephone": "(797) 440-3255",
      "rowId": "2ED33C64-2366-C636-327D-1455E6C2D30D"
    },
    {
      "firstName": "Marsden",
      "lastName": "Allen",
      "company": "Adipiscing Enim LLC",
      "address": "P.O. Box 179, 1091 Nulla Rd.",
      "city": "Worcester",
      "zipCode": "4232",
      "country": "Bolivia",
      "telephone": "(926) 841-5761",
      "rowId": "9ABC06E0-D246-4949-7C7B-67101C664A70"
    },
    {
      "firstName": "Arsenio",
      "lastName": "Guy",
      "company": "Donec Elementum PC",
      "address": "1044 Vel, Road",
      "city": "Nadrin",
      "zipCode": "409711",
      "country": "China",
      "telephone": "(992) 231-3977",
      "rowId": "355D46D4-9640-1BE8-5553-CBC6EF6D1BDF"
    },
    {
      "firstName": "Lavinia",
      "lastName": "Edward",
      "company": "Duis Sit Amet Corp.",
      "address": "P.O. Box 261, 665 Ornare, Avenue",
      "city": "Saint-Étienne-du-Rouvray",
      "zipCode": "7640",
      "country": "Marshall Islands",
      "telephone": "(305) 560-1427",
      "rowId": "BDC70927-1815-0AB8-4F49-31B0EEAF1972"
    },
    {
      "firstName": "Blair",
      "lastName": "Raja",
      "company": "Quisque Purus PC",
      "address": "Ap #140-6656 Amet, Rd.",
      "city": "Aubervilliers",
      "zipCode": "1688",
      "country": "Netherlands",
      "telephone": "(987) 793-8275",
      "rowId": "1E7D8BE6-DCA2-D727-7EE7-34FDA4E50299"
    },
    {
      "firstName": "Yardley",
      "lastName": "Malik",
      "company": "Tincidunt LLC",
      "address": "9349 Feugiat Road",
      "city": "Ferness",
      "zipCode": "23528",
      "country": "Norway",
      "telephone": "(178) 681-8624",
      "rowId": "5E346808-DDEB-C26D-41A5-5C86FB3D78E2"
    },
    {
      "firstName": "Sharon",
      "lastName": "Colette",
      "company": "Ultrices A Auctor LLC",
      "address": "P.O. Box 956, 1247 Vestibulum Ave",
      "city": "Rudiano",
      "zipCode": "396207",
      "country": "Nicaragua",
      "telephone": "(359) 551-3865",
      "rowId": "111EC89D-F750-D4FC-7E8D-2727AD2F114B"
    },
    {
      "firstName": "Halla",
      "lastName": "Lionel",
      "company": "Magna Phasellus Dolor PC",
      "address": "Ap #992-9584 Aliquet Rd.",
      "city": "Fredericton",
      "zipCode": "79931",
      "country": "Jordan",
      "telephone": "(341) 413-5823",
      "rowId": "DF92B58C-5975-9E3B-86FC-2A23C85B96E0"
    },
    {
      "firstName": "Kiona",
      "lastName": "Josephine",
      "company": "Luctus Aliquet Odio Limited",
      "address": "735 Molestie Rd.",
      "city": "Lens-Saint-Remy",
      "zipCode": "9394",
      "country": "Jersey",
      "telephone": "(607) 235-7493",
      "rowId": "92D49C83-F789-FBF9-2A04-96B720338922"
    },
    {
      "firstName": "Cassady",
      "lastName": "May",
      "company": "Commodo Institute",
      "address": "P.O. Box 255, 672 Ipsum St.",
      "city": "Thorembais-Saint-Trond",
      "zipCode": "29576",
      "country": "Malta",
      "telephone": "(874) 542-4229",
      "rowId": "5440F318-F7B8-00A0-AB5A-3E164FA4DE78"
    },
    {
      "firstName": "Porter",
      "lastName": "Teagan",
      "company": "Felis Corp.",
      "address": "940-3011 Facilisis Street",
      "city": "Beez",
      "zipCode": "248619",
      "country": "Pakistan",
      "telephone": "(957) 523-8965",
      "rowId": "8E69A229-ED80-C344-CEC0-7876B7181703"
    },
    {
      "firstName": "Isabelle",
      "lastName": "Patrick",
      "company": "Feugiat Sed Nec Consulting",
      "address": "P.O. Box 496, 7952 Nulla Road",
      "city": "Foz do Iguaçu",
      "zipCode": "22721",
      "country": "Congo, the Democratic Republic of the",
      "telephone": "(168) 702-6833",
      "rowId": "542DFCC2-AF6F-D15F-8904-CCBAFB240721"
    },
    {
      "firstName": "Tana",
      "lastName": "Lana",
      "company": "Lorem Ac Risus Foundation",
      "address": "Ap #422-4165 A Rd.",
      "city": "Wakefield",
      "zipCode": "9170",
      "country": "Gambia",
      "telephone": "(793) 655-3412",
      "rowId": "54DB403E-17D3-10F7-F90A-313792314401"
    },
    {
      "firstName": "Maxwell",
      "lastName": "Beatrice",
      "company": "Tempor Foundation",
      "address": "352-7477 Lectus Street",
      "city": "Bridgwater",
      "zipCode": "19-488",
      "country": "Netherlands",
      "telephone": "(403) 460-6580",
      "rowId": "86AC7D9F-146C-DDBA-05F6-9C46804AFA0F"
    },
    {
      "firstName": "Tarik",
      "lastName": "Merrill",
      "company": "Ornare Lectus Industries",
      "address": "770-1588 Ultrices Avenue",
      "city": "Vespolate",
      "zipCode": "40517",
      "country": "Greece",
      "telephone": "(887) 313-1447",
      "rowId": "891178A8-A712-B169-7DF1-C695AD56B5D9"
    },
    {
      "firstName": "Allen",
      "lastName": "Melanie",
      "company": "Primis Foundation",
      "address": "289-8753 Ullamcorper. Rd.",
      "city": "Pugwash",
      "zipCode": "9592DN",
      "country": "American Samoa",
      "telephone": "(226) 527-4051",
      "rowId": "9876D708-5F9A-7522-35C3-885534E02841"
    },
    {
      "firstName": "Yvette",
      "lastName": "Aileen",
      "company": "Id Enim Curabitur Institute",
      "address": "P.O. Box 382, 1034 Dolor, Avenue",
      "city": "Baddeck",
      "zipCode": "2909",
      "country": "Bolivia",
      "telephone": "(727) 640-3056",
      "rowId": "3B8A04A8-194A-59B5-2D48-AEE473EAC291"
    },
    {
      "firstName": "Gareth",
      "lastName": "Yolanda",
      "company": "Quis Diam Luctus Consulting",
      "address": "549-7185 Sed St.",
      "city": "Teltow",
      "zipCode": "13118",
      "country": "Malaysia",
      "telephone": "(721) 509-4819",
      "rowId": "2580805D-DA6B-4DD5-35EA-5F1EEA9B0007"
    },
    {
      "firstName": "Lillian",
      "lastName": "Jelani",
      "company": "In Lorem Inc.",
      "address": "5748 Urna St.",
      "city": "Lethbridge",
      "zipCode": "33631",
      "country": "Aruba",
      "telephone": "(437) 698-8776",
      "rowId": "FB2A4182-51B0-3C6F-A171-3F1F41AE132C"
    },
    {
      "firstName": "Sloane",
      "lastName": "Aristotle",
      "company": "Donec Sollicitudin Adipiscing Incorporated",
      "address": "Ap #391-6017 Molestie Road",
      "city": "Campina Grande",
      "zipCode": "61603",
      "country": "Guadeloupe",
      "telephone": "(300) 493-8371",
      "rowId": "D609F4C8-9C7F-5E54-AF88-7DDE763A4E16"
    },
    {
      "firstName": "Jessica",
      "lastName": "Ivana",
      "company": "Aliquam PC",
      "address": "5366 Nulla Avenue",
      "city": "Assiniboia",
      "zipCode": "43515",
      "country": "Virgin Islands, United States",
      "telephone": "(984) 862-8436",
      "rowId": "98850974-C439-3345-3C11-6F7F186A308F"
    },
    {
      "firstName": "Keely",
      "lastName": "Pearl",
      "company": "Sit Amet Industries",
      "address": "P.O. Box 421, 505 Risus. Rd.",
      "city": "Camporotondo di Fiastrone",
      "zipCode": "27497",
      "country": "Kiribati",
      "telephone": "(385) 858-7916",
      "rowId": "51E847E9-2D02-B8AD-8CAA-7782BA2453DB"
    },
    {
      "firstName": "Inga",
      "lastName": "Mannix",
      "company": "Enim Condimentum Eget Consulting",
      "address": "P.O. Box 121, 4789 Tristique Avenue",
      "city": "Rockville",
      "zipCode": "7854",
      "country": "Mauritania",
      "telephone": "(512) 769-5709",
      "rowId": "753758F9-3752-1BF1-E987-814D44C949E3"
    },
    {
      "firstName": "Andrew",
      "lastName": "Marny",
      "company": "Semper Tellus Id Company",
      "address": "Ap #747-2050 Nulla Av.",
      "city": "Floreffe",
      "zipCode": "J1W 8B2",
      "country": "Mauritania",
      "telephone": "(354) 960-4913",
      "rowId": "6EDA1E0F-57B1-1FD3-9AB3-3185324D5D39"
    },
    {
      "firstName": "Stone",
      "lastName": "Evan",
      "company": "Justo Faucibus LLC",
      "address": "Ap #546-5332 Dapibus Rd.",
      "city": "Port Coquitlam",
      "zipCode": "4096",
      "country": "Nicaragua",
      "telephone": "(419) 241-3430",
      "rowId": "3B379927-41B9-FB52-BBD1-6DEAC42519BC"
    },
    {
      "firstName": "Pearl",
      "lastName": "Whoopi",
      "company": "At Ltd",
      "address": "P.O. Box 233, 8646 Orci. St.",
      "city": "Fort Worth",
      "zipCode": "77560",
      "country": "Armenia",
      "telephone": "(471) 132-0213",
      "rowId": "99AC376E-CCBB-FE44-027A-1C2C8E8180A0"
    },
    {
      "firstName": "Valentine",
      "lastName": "Erin",
      "company": "Aenean Euismod Ltd",
      "address": "Ap #313-5229 Sit Street",
      "city": "Petrópolis",
      "zipCode": "30211",
      "country": "Ireland",
      "telephone": "(642) 282-7522",
      "rowId": "F7B01760-CA42-2CED-E215-2B813029EB45"
    },
    {
      "firstName": "Baker",
      "lastName": "Darrel",
      "company": "Erat Volutpat Foundation",
      "address": "P.O. Box 891, 1470 Mauris St.",
      "city": "Crescentino",
      "zipCode": "798985",
      "country": "Jordan",
      "telephone": "(345) 490-2808",
      "rowId": "1AF6D45D-47BA-D084-EB10-6FF5190D1583"
    },
    {
      "firstName": "Sheila",
      "lastName": "Neville",
      "company": "Ac Eleifend Corp.",
      "address": "803-8671 Magnis St.",
      "city": "Meerhout",
      "zipCode": "R5H 0N4",
      "country": "Kenya",
      "telephone": "(997) 845-8009",
      "rowId": "9EE5BE57-82D8-6585-DADF-90F04C8EBC09"
    },
    {
      "firstName": "Shoshana",
      "lastName": "Rhonda",
      "company": "Ligula Corp.",
      "address": "651-1235 Nunc Avenue",
      "city": "Avise",
      "zipCode": "M3Y 5B9",
      "country": "Algeria",
      "telephone": "(655) 443-6884",
      "rowId": "855976E8-5A8C-686B-CEED-F779468DEF4F"
    },
    {
      "firstName": "Tatum",
      "lastName": "Latifah",
      "company": "Montes LLC",
      "address": "Ap #634-8184 Nullam Road",
      "city": "West Valley City",
      "zipCode": "7421",
      "country": "Monaco",
      "telephone": "(406) 466-1928",
      "rowId": "80F999BF-E153-776C-BBA5-D7847F525401"
    },
    {
      "firstName": "Beck",
      "lastName": "Melanie",
      "company": "Duis Elementum Dui Corp.",
      "address": "Ap #441-298 Fermentum Street",
      "city": "Mainz",
      "zipCode": "56679",
      "country": "Puerto Rico",
      "telephone": "(385) 950-1094",
      "rowId": "B0B4E7C1-A67A-9F14-27D2-5A8F0D4A25AE"
    },
    {
      "firstName": "Louis",
      "lastName": "Margaret",
      "company": "Elit Institute",
      "address": "7517 Tincidunt Street",
      "city": "Castellana Sicula",
      "zipCode": "8132",
      "country": "Taiwan",
      "telephone": "(182) 324-6697",
      "rowId": "6A89EB0A-997F-9BBE-91CA-4C92C09BD70D"
    },
    {
      "firstName": "Azalia",
      "lastName": "Melyssa",
      "company": "Scelerisque Associates",
      "address": "Ap #990-4043 Amet Road",
      "city": "Neerheylissem",
      "zipCode": "6773",
      "country": "Thailand",
      "telephone": "(784) 388-1262",
      "rowId": "29FD4BA3-A2FA-A363-71DB-DB4B9E7C92C8"
    },
    {
      "firstName": "Gregory",
      "lastName": "Lee",
      "company": "Quam A Felis Incorporated",
      "address": "Ap #544-8779 Phasellus Street",
      "city": "Goderich",
      "zipCode": "H9B 9J0",
      "country": "Tanzania",
      "telephone": "(159) 802-7835",
      "rowId": "222767F6-7427-5205-6307-A94029FC7964"
    },
    {
      "firstName": "Maris",
      "lastName": "Isabella",
      "company": "Nunc Interdum Feugiat Corp.",
      "address": "898-5553 Volutpat. Av.",
      "city": "Tongeren",
      "zipCode": "94-364",
      "country": "Eritrea",
      "telephone": "(898) 974-5914",
      "rowId": "D9CA9DA7-F3E0-2F39-F45B-BA5B35F10159"
    }

   ]

    return {
      removeArtist: removeArtist,
      addArtist: addArtist,
      artistList: artistList
    };
  };

  module.factory("tableDataService", tableDataService);

}(angular.module("ut.table")));
