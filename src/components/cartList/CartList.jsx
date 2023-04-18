import styles from "./cartList.module.scss";

import CartItem from "../cartItem";

const CartList = () => {
  const events = [
    {
      name: "Imagine Dragons - Mercury World Tour",
      type: "event",
      id: "ZK98xZKrZkv6eZup5QQKr",
      test: false,
      url: "https://shop.ticketmaster.it/biglietti/acquista-biglietti-imagine-dragons-mercury-world-tour-05-agosto-2023-circo-massimo-roma-5061.html",
      locale: "it-it",
      images: [
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RECOMENDATION_16_9.jpg",
          width: 100,
          height: 56,
          fallback: false,
        },
        {
          ratio: "3_2",
          url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_ARTIST_PAGE_3_2.jpg",
          width: 305,
          height: 203,
          fallback: false,
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_16_9.jpg",
          width: 640,
          height: 360,
          fallback: false,
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_LANDSCAPE_16_9.jpg",
          width: 1136,
          height: 639,
          fallback: false,
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_16_9.jpg",
          width: 1024,
          height: 576,
          fallback: false,
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_LARGE_16_9.jpg",
          width: 2048,
          height: 1152,
          fallback: false,
        },
        {
          ratio: "3_2",
          url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_3_2.jpg",
          width: 1024,
          height: 683,
          fallback: false,
        },
        {
          ratio: "3_2",
          url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_3_2.jpg",
          width: 640,
          height: 427,
          fallback: false,
        },
        {
          ratio: "4_3",
          url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_CUSTOM.jpg",
          width: 305,
          height: 225,
          fallback: false,
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_EVENT_DETAIL_PAGE_16_9.jpg",
          width: 205,
          height: 115,
          fallback: false,
        },
      ],
      sales: {
        public: {
          startDateTime: "2022-12-01T08:51:00Z",
          startTBD: false,
          startTBA: false,
          endDateTime: "2023-08-05T19:00:00Z",
        },
      },
      dates: {
        start: {
          localDate: "2023-08-05",
          localTime: "21:00:00",
          dateTime: "2023-08-05T19:00:00Z",
          dateTBD: false,
          dateTBA: false,
          timeTBA: false,
          noSpecificTime: false,
        },
        timezone: "Europe/Rome",
        status: {
          code: "onsale",
        },
        spanMultipleDays: false,
      },
      classifications: [
        {
          primary: true,
          segment: {
            id: "KZFzniwnSyZfZ7v7nJ",
          },
          genre: {
            id: "KnvZfZ7vAeA",
          },
          subGenre: {
            id: "KZazBEonSMnZfZ7v6F1",
          },
          type: {
            id: "KZAyXgnZfZ7v7nI",
          },
          subType: {
            id: "KZFzBErXgnZfZ7v7lJ",
          },
          family: false,
        },
      ],
      _links: {
        self: {
          href: "/discovery/v2/events/ZK98xZKrZkv6eZup5QQKr?locale=it-it",
        },
        attractions: [
          {
            href: "/discovery/v2/attractions/K8vZ917GSz7?locale=it-it",
          },
        ],
        venues: [
          {
            href: "/discovery/v2/venues/ZK98xZKrZekkAZup5QQKr?locale=it-it",
          },
        ],
      },
      _embedded: {
        venues: [
          {
            name: "Circo Massimo",
            type: "venue",
            id: "ZK98xZKrZekkAZup5QQKr",
            test: false,
            locale: "it-it",
            city: {
              name: "Roma",
            },
            country: {
              name: "Italia",
              countryCode: "IT",
            },
            location: {
              longitude: "12.482945",
              latitude: "41.886133",
            },
            upcomingEvents: {
              _total: 0,
              _filtered: 0,
            },
            _links: {
              self: {
                href: "/discovery/v2/venues/ZK98xZKrZekkAZup5QQKr?locale=it-it",
              },
            },
          },
        ],
        attractions: [
          {
            name: "Imagine Dragons",
            type: "attraction",
            id: "K8vZ917GSz7",
            test: false,
            url: "https://www.ticketmaster.com/imagine-dragons-tickets/artist/1435919",
            locale: "it-it",
            externalLinks: {
              youtube: [
                {
                  url: "https://www.youtube.com/channel/UCT9zcQNlyht7fRlcjmflRSA",
                },
              ],
              twitter: [
                {
                  url: "https://twitter.com/Imaginedragons",
                },
              ],
              itunes: [
                {
                  url: "https://music.apple.com/us/artist/imagine-dragons/358714030",
                },
              ],
              lastfm: [
                {
                  url: "http://www.last.fm/music/Imagine+Dragons",
                },
              ],
              facebook: [
                {
                  url: "https://www.facebook.com/ImagineDragons",
                },
              ],
              wiki: [
                {
                  url: "https://en.wikipedia.org/wiki/Imagine_Dragons",
                },
              ],
              spotify: [
                {
                  url: "https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q",
                },
              ],
              instagram: [
                {
                  url: "http://instagram.com/imaginedragons/",
                },
                {
                  url: "http://instagram.com/imaginedragons",
                },
              ],
              musicbrainz: [
                {
                  id: "012151a8-0f9a-44c9-997f-ebd68b5389f9",
                },
              ],
              homepage: [
                {
                  url: "http://www.imaginedragonsmusic.com/",
                },
              ],
            },
            images: [
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RECOMENDATION_16_9.jpg",
                width: 100,
                height: 56,
                fallback: false,
              },
              {
                ratio: "3_2",
                url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_ARTIST_PAGE_3_2.jpg",
                width: 305,
                height: 203,
                fallback: false,
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_16_9.jpg",
                width: 640,
                height: 360,
                fallback: false,
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_LANDSCAPE_16_9.jpg",
                width: 1136,
                height: 639,
                fallback: false,
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_16_9.jpg",
                width: 1024,
                height: 576,
                fallback: false,
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                width: 2048,
                height: 1152,
                fallback: false,
              },
              {
                ratio: "3_2",
                url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_TABLET_LANDSCAPE_3_2.jpg",
                width: 1024,
                height: 683,
                fallback: false,
              },
              {
                ratio: "3_2",
                url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_RETINA_PORTRAIT_3_2.jpg",
                width: 640,
                height: 427,
                fallback: false,
              },
              {
                ratio: "4_3",
                url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_CUSTOM.jpg",
                width: 305,
                height: 225,
                fallback: false,
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/c90/67a18d21-394f-4afe-84f9-15560d797c90_1652911_EVENT_DETAIL_PAGE_16_9.jpg",
                width: 205,
                height: 115,
                fallback: false,
              },
            ],
            classifications: [
              {
                primary: true,
                segment: {
                  id: "KZFzniwnSyZfZ7v7nJ",
                },
                genre: {
                  id: "KnvZfZ7vAeA",
                },
                subGenre: {
                  id: "KZazBEonSMnZfZ7v6F1",
                },
                type: {
                  id: "KZAyXgnZfZ7v7nI",
                },
                subType: {
                  id: "KZFzBErXgnZfZ7v7lJ",
                },
                family: false,
              },
            ],
            upcomingEvents: {
              _total: 23,
              "mfx-de": 1,
              ticketmaster: 20,
              _filtered: 0,
              "mfx-pl": 2,
            },
            _links: {
              self: {
                href: "/discovery/v2/attractions/K8vZ917GSz7?locale=it-it",
              },
            },
          },
        ],
      },
    },
    {
      name: "Hayley Kiyoko | Panorama Package",
      type: "event",
      id: "Z698xZu3Za7Z2",
      test: false,
      url: "https://www.ticketmaster.ch/event/hayley-kiyoko-%7C-panorama-package-biglietti/16399?language=it-it",
      locale: "it-it",
      images: [
        {
          ratio: "4_3",
          url: "https://s1.ticketm.net/dam/a/ff1/5ab4ed92-17d5-4eea-b2b8-741db77e2ff1_CUSTOM.jpg",
          width: 305,
          height: 225,
          fallback: false,
        },
        {
          url: "https://s1.ticketm.net/dam/a/ff1/5ab4ed92-17d5-4eea-b2b8-741db77e2ff1_SOURCE",
          width: 1576,
          height: 2048,
          fallback: false,
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/ff1/5ab4ed92-17d5-4eea-b2b8-741db77e2ff1_EVENT_DETAIL_PAGE_16_9.jpg",
          width: 205,
          height: 115,
          fallback: false,
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/ff1/5ab4ed92-17d5-4eea-b2b8-741db77e2ff1_RETINA_LANDSCAPE_16_9.jpg",
          width: 1136,
          height: 639,
          fallback: false,
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/ff1/5ab4ed92-17d5-4eea-b2b8-741db77e2ff1_TABLET_LANDSCAPE_16_9.jpg",
          width: 1024,
          height: 576,
          fallback: false,
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/ebf/c227b222-e5ed-4655-a6bc-816076a6debf_SOURCE",
          width: 2426,
          height: 1365,
          fallback: false,
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/ff1/5ab4ed92-17d5-4eea-b2b8-741db77e2ff1_RETINA_PORTRAIT_16_9.jpg",
          width: 640,
          height: 360,
          fallback: false,
        },
        {
          ratio: "3_2",
          url: "https://s1.ticketm.net/dam/a/ff1/5ab4ed92-17d5-4eea-b2b8-741db77e2ff1_TABLET_LANDSCAPE_3_2.jpg",
          width: 1024,
          height: 683,
          fallback: false,
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/ebf/c227b222-e5ed-4655-a6bc-816076a6debf_TABLET_LANDSCAPE_LARGE_16_9.jpg",
          width: 2048,
          height: 1152,
          fallback: false,
        },
        {
          ratio: "3_2",
          url: "https://s1.ticketm.net/dam/a/ff1/5ab4ed92-17d5-4eea-b2b8-741db77e2ff1_RETINA_PORTRAIT_3_2.jpg",
          width: 640,
          height: 427,
          fallback: false,
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/ff1/5ab4ed92-17d5-4eea-b2b8-741db77e2ff1_RECOMENDATION_16_9.jpg",
          width: 100,
          height: 56,
          fallback: false,
        },
        {
          ratio: "3_2",
          url: "https://s1.ticketm.net/dam/a/ff1/5ab4ed92-17d5-4eea-b2b8-741db77e2ff1_ARTIST_PAGE_3_2.jpg",
          width: 305,
          height: 203,
          fallback: false,
        },
      ],
      sales: {
        public: {
          startDateTime: "2023-02-03T09:00:00Z",
          startTBD: false,
          startTBA: false,
          endDateTime: "2023-04-11T10:00:00Z",
        },
      },
      dates: {
        start: {
          localDate: "2023-04-18",
          localTime: "20:00:00",
          dateTime: "2023-04-18T18:00:00Z",
          dateTBD: false,
          dateTBA: false,
          timeTBA: false,
          noSpecificTime: false,
        },
        timezone: "Europe/Zurich",
        status: {
          code: "offsale",
        },
        spanMultipleDays: false,
      },
      classifications: [
        {
          primary: true,
          segment: {
            id: "KZFzniwnSyZfZ7v7nJ",
          },
          genre: {
            id: "KnvZfZ7vAeA",
          },
          subGenre: {
            id: "KZazBEonSMnZfZ7v6F1",
          },
          family: false,
        },
        {
          primary: false,
          segment: {
            id: "KZFzniwnSyZfZ7v7nJ",
          },
          genre: {
            id: "KnvZfZ7vAeA",
          },
          subGenre: {
            id: "KZazBEonSMnZfZ7v6F1",
          },
          family: false,
        },
      ],
      promoter: {
        id: "211",
        name: "Mainland Music AG",
      },
      promoters: [
        {
          id: "211",
          name: "Mainland Music AG",
        },
      ],
      seatmap: {
        staticUrl:
          "https://media.ticketmaster.eu/switzerland/13e1e272012822a0d0b0648bdda184a1.png",
      },
      _links: {
        self: {
          href: "/discovery/v2/events/Z698xZu3Za7Z2?locale=it-it",
        },
        attractions: [
          {
            href: "/discovery/v2/attractions/K8vZ917o3jV?locale=it-it",
          },
          {
            href: "/discovery/v2/attractions/K8vZ917_Q27?locale=it-it",
          },
        ],
        venues: [
          {
            href: "/discovery/v2/venues/Z198xZu3Zd71?locale=it-it",
          },
        ],
      },
      _embedded: {
        venues: [
          {
            type: "venue",
            id: "Z198xZu3Zd71",
            test: false,
            url: "https://www.ticketmaster.ch/venue/komplex-457-zurich-tickets/komplzur/103",
            locale: "it-it",
            images: [
              {
                ratio: "16_9",
                url: "https://media.ticketmaster.eu/switzerland/9afb1794058890ee4bf8647de0dc60c4.png",
                width: 205,
                height: 115,
                fallback: false,
              },
            ],
            postalCode: "8048",
            timezone: "Europe/Zurich",
            city: {
              name: "Zurigo",
            },
            country: {
              name: "Svizzera",
              countryCode: "CH",
            },
            address: {
              line1: "Hohlstrasse 457",
            },
            location: {
              longitude: "8.49989",
              latitude: "47.3881",
            },
            upcomingEvents: {
              _total: 26,
              _filtered: 0,
              "mfx-ch": 26,
            },
            _links: {
              self: {
                href: "/discovery/v2/venues/Z198xZu3Zd71?locale=it-it",
              },
            },
          },
        ],
        attractions: [
          {
            name: "Hayley Kiyoko",
            type: "attraction",
            id: "K8vZ917o3jV",
            test: false,
            url: "https://www.ticketmaster.com/hayley-kiyoko-tickets/artist/1873099",
            locale: "it-it",
            externalLinks: {
              youtube: [
                {
                  url: "https://www.youtube.com/channel/UC00X4AUEmat8Pk772tDu8OA",
                },
              ],
              twitter: [
                {
                  url: "https://twitter.com/HayleyKiyoko",
                },
              ],
              itunes: [
                {
                  url: "https://itunes.apple.com/artist/id325569584",
                },
              ],
              lastfm: [
                {
                  url: "http://www.last.fm/music/Hayley+Kiyoko",
                },
              ],
              facebook: [
                {
                  url: "https://www.facebook.com/HayleyKiyoko",
                },
              ],
              wiki: [
                {
                  url: "https://en.wikipedia.org/wiki/Hayley_Kiyoko",
                },
              ],
              spotify: [
                {
                  url: "https://open.spotify.com/artist/3LjhVl7GzYsza1biQjTpaN",
                },
              ],
              musicbrainz: [
                {
                  id: "3abc7470-3d67-4272-a24c-439f411b42eb",
                },
              ],
              instagram: [
                {
                  url: "https://www.instagram.com/hayleykiyoko/",
                },
              ],
              homepage: [
                {
                  url: "http://www.hayleykiyokoofficial.com/",
                },
              ],
            },
            images: [
              {
                ratio: "4_3",
                url: "https://s1.ticketm.net/dam/a/ff1/5ab4ed92-17d5-4eea-b2b8-741db77e2ff1_CUSTOM.jpg",
                width: 305,
                height: 225,
                fallback: false,
              },
              {
                url: "https://s1.ticketm.net/dam/a/ff1/5ab4ed92-17d5-4eea-b2b8-741db77e2ff1_SOURCE",
                width: 1576,
                height: 2048,
                fallback: false,
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/ff1/5ab4ed92-17d5-4eea-b2b8-741db77e2ff1_EVENT_DETAIL_PAGE_16_9.jpg",
                width: 205,
                height: 115,
                fallback: false,
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/ff1/5ab4ed92-17d5-4eea-b2b8-741db77e2ff1_RETINA_LANDSCAPE_16_9.jpg",
                width: 1136,
                height: 639,
                fallback: false,
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/ff1/5ab4ed92-17d5-4eea-b2b8-741db77e2ff1_TABLET_LANDSCAPE_16_9.jpg",
                width: 1024,
                height: 576,
                fallback: false,
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/ebf/c227b222-e5ed-4655-a6bc-816076a6debf_SOURCE",
                width: 2426,
                height: 1365,
                fallback: false,
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/ff1/5ab4ed92-17d5-4eea-b2b8-741db77e2ff1_RETINA_PORTRAIT_16_9.jpg",
                width: 640,
                height: 360,
                fallback: false,
              },
              {
                ratio: "3_2",
                url: "https://s1.ticketm.net/dam/a/ff1/5ab4ed92-17d5-4eea-b2b8-741db77e2ff1_TABLET_LANDSCAPE_3_2.jpg",
                width: 1024,
                height: 683,
                fallback: false,
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/ebf/c227b222-e5ed-4655-a6bc-816076a6debf_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                width: 2048,
                height: 1152,
                fallback: false,
              },
              {
                ratio: "3_2",
                url: "https://s1.ticketm.net/dam/a/ff1/5ab4ed92-17d5-4eea-b2b8-741db77e2ff1_RETINA_PORTRAIT_3_2.jpg",
                width: 640,
                height: 427,
                fallback: false,
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/ff1/5ab4ed92-17d5-4eea-b2b8-741db77e2ff1_RECOMENDATION_16_9.jpg",
                width: 100,
                height: 56,
                fallback: false,
              },
              {
                ratio: "3_2",
                url: "https://s1.ticketm.net/dam/a/ff1/5ab4ed92-17d5-4eea-b2b8-741db77e2ff1_ARTIST_PAGE_3_2.jpg",
                width: 305,
                height: 203,
                fallback: false,
              },
            ],
            classifications: [
              {
                primary: true,
                segment: {
                  id: "KZFzniwnSyZfZ7v7nJ",
                },
                genre: {
                  id: "KnvZfZ7vAeA",
                },
                subGenre: {
                  id: "KZazBEonSMnZfZ7v6F1",
                },
                type: {
                  id: "KZAyXgnZfZ7v7nI",
                },
                subType: {
                  id: "KZFzBErXgnZfZ7v7lJ",
                },
                family: false,
              },
            ],
            upcomingEvents: {
              _total: 35,
              tmr: 3,
              "mfx-de": 3,
              ticketweb: 2,
              ticketmaster: 24,
              _filtered: 0,
              "mfx-ch": 3,
            },
            _links: {
              self: {
                href: "/discovery/v2/attractions/K8vZ917o3jV?locale=it-it",
              },
            },
          },
          {
            name: "Leah Kate",
            type: "attraction",
            id: "K8vZ917_Q27",
            test: false,
            url: "https://www.ticketmaster.com/leah-kate-tickets/artist/2792174",
            locale: "it-it",
            externalLinks: {
              youtube: [
                {
                  url: "https://www.youtube.com/channel/UClNV9z0SVGg3AvI8mk-j2Lg",
                },
              ],
              facebook: [
                {
                  url: "https://www.facebook.com/LeahKateMusic/",
                },
              ],
              spotify: [
                {
                  url: "https://open.spotify.com/artist/6oWOHAOyBUn6aJlKIPJK9r?si=2cNCNdj8Qn25KqpgIrXnow&nd=1",
                },
              ],
              instagram: [
                {
                  url: "https://www.instagram.com/leah/",
                },
              ],
            },
            images: [
              {
                ratio: "4_3",
                url: "https://s1.ticketm.net/dam/a/cd7/b6a1e9e7-0794-4f81-ae1e-471fafb8fcd7_1706111_CUSTOM.jpg",
                width: 305,
                height: 225,
                fallback: false,
                attribution: "Leah Kate",
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/cd7/b6a1e9e7-0794-4f81-ae1e-471fafb8fcd7_1706111_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                width: 2048,
                height: 1152,
                fallback: false,
                attribution: "Leah Kate",
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/cd7/b6a1e9e7-0794-4f81-ae1e-471fafb8fcd7_1706111_RECOMENDATION_16_9.jpg",
                width: 100,
                height: 56,
                fallback: false,
                attribution: "Leah Kate",
              },
              {
                ratio: "3_2",
                url: "https://s1.ticketm.net/dam/a/cd7/b6a1e9e7-0794-4f81-ae1e-471fafb8fcd7_1706111_RETINA_PORTRAIT_3_2.jpg",
                width: 640,
                height: 427,
                fallback: false,
                attribution: "Leah Kate",
              },
              {
                ratio: "3_2",
                url: "https://s1.ticketm.net/dam/a/cd7/b6a1e9e7-0794-4f81-ae1e-471fafb8fcd7_1706111_ARTIST_PAGE_3_2.jpg",
                width: 305,
                height: 203,
                fallback: false,
                attribution: "Leah Kate",
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/cd7/b6a1e9e7-0794-4f81-ae1e-471fafb8fcd7_1706111_RETINA_PORTRAIT_16_9.jpg",
                width: 640,
                height: 360,
                fallback: false,
                attribution: "Leah Kate",
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/cd7/b6a1e9e7-0794-4f81-ae1e-471fafb8fcd7_1706111_EVENT_DETAIL_PAGE_16_9.jpg",
                width: 205,
                height: 115,
                fallback: false,
                attribution: "Leah Kate",
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/cd7/b6a1e9e7-0794-4f81-ae1e-471fafb8fcd7_1706111_TABLET_LANDSCAPE_16_9.jpg",
                width: 1024,
                height: 576,
                fallback: false,
                attribution: "Leah Kate",
              },
              {
                ratio: "3_2",
                url: "https://s1.ticketm.net/dam/a/cd7/b6a1e9e7-0794-4f81-ae1e-471fafb8fcd7_1706111_TABLET_LANDSCAPE_3_2.jpg",
                width: 1024,
                height: 683,
                fallback: false,
                attribution: "Leah Kate",
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/cd7/b6a1e9e7-0794-4f81-ae1e-471fafb8fcd7_1706111_RETINA_LANDSCAPE_16_9.jpg",
                width: 1136,
                height: 639,
                fallback: false,
                attribution: "Leah Kate",
              },
            ],
            classifications: [
              {
                primary: true,
                segment: {
                  id: "KZFzniwnSyZfZ7v7nJ",
                },
                genre: {
                  id: "KnvZfZ7vAev",
                },
                subGenre: {
                  id: "KZazBEonSMnZfZ7vk1t",
                },
                type: {
                  id: "KZAyXgnZfZ7v7la",
                },
                subType: {
                  id: "KZFzBErXgnZfZ7vAd7",
                },
                family: false,
              },
            ],
            upcomingEvents: {
              _total: 3,
              _filtered: 0,
              "mfx-ch": 3,
            },
            _links: {
              self: {
                href: "/discovery/v2/attractions/K8vZ917_Q27?locale=it-it",
              },
            },
          },
        ],
      },
    },
    {
      name: "UNA NOTTE CON FAST ANIMALS AND SLOW KIDS – CONCERTO IN QUATTRO ATTI PER PICCOLA ORCHESTRA DA CAMERA – TEATRI 2023",
      type: "event",
      id: "ZK98xZKrZkkv1Zup5QQKr",
      test: false,
      url: "https://shop.ticketmaster.it/biglietti/acquista-biglietti-una-notte-con-fast-animals-and-slow-kids-concerto-in-quattro-atti-per-piccola-orchestra-da-camera-teatri-2023-19-aprile-2023-auditorium-conciliazione-roma-5509.html",
      locale: "it-it",
      images: [
        {
          ratio: "3_2",
          url: "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_ARTIST_PAGE_3_2.jpg",
          width: 305,
          height: 203,
          fallback: true,
        },
        {
          ratio: "3_2",
          url: "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_RETINA_PORTRAIT_3_2.jpg",
          width: 640,
          height: 427,
          fallback: true,
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_EVENT_DETAIL_PAGE_16_9.jpg",
          width: 205,
          height: 115,
          fallback: true,
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_RETINA_PORTRAIT_16_9.jpg",
          width: 640,
          height: 360,
          fallback: true,
        },
        {
          ratio: "4_3",
          url: "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_CUSTOM.jpg",
          width: 305,
          height: 225,
          fallback: true,
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_RETINA_LANDSCAPE_16_9.jpg",
          width: 1136,
          height: 639,
          fallback: true,
        },
        {
          ratio: "3_2",
          url: "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_TABLET_LANDSCAPE_3_2.jpg",
          width: 1024,
          height: 683,
          fallback: true,
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_TABLET_LANDSCAPE_16_9.jpg",
          width: 1024,
          height: 576,
          fallback: true,
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_RECOMENDATION_16_9.jpg",
          width: 100,
          height: 56,
          fallback: true,
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/c/f50/96fa13be-e395-429b-8558-a51bb9054f50_105951_TABLET_LANDSCAPE_LARGE_16_9.jpg",
          width: 2048,
          height: 1152,
          fallback: true,
        },
      ],
      sales: {
        public: {
          startDateTime: "2016-12-31T23:00:00Z",
          startTBD: false,
          startTBA: false,
          endDateTime: "2023-04-19T19:00:00Z",
        },
      },
      dates: {
        start: {
          localDate: "2023-04-19",
          localTime: "21:00:00",
          dateTime: "2023-04-19T19:00:00Z",
          dateTBD: false,
          dateTBA: false,
          timeTBA: false,
          noSpecificTime: false,
        },
        timezone: "Europe/Rome",
        status: {
          code: "onsale",
        },
        spanMultipleDays: false,
      },
      classifications: [
        {
          primary: true,
          segment: {
            id: "KZFzniwnSyZfZ7v7nJ",
          },
          genre: {
            id: "KnvZfZ7vAvv",
          },
          subGenre: {
            id: "KZazBEonSMnZfZ7vAvn",
          },
          type: {
            id: "KZAyXgnZfZ7v7l1",
          },
          subType: {
            id: "KZFzBErXgnZfZ7vA71",
          },
          family: false,
        },
      ],
      _links: {
        self: {
          href: "/discovery/v2/events/ZK98xZKrZkkv1Zup5QQKr?locale=it-it",
        },
        attractions: [
          {
            href: "/discovery/v2/attractions/K8vZ917_bm0?locale=it-it",
          },
        ],
        venues: [
          {
            href: "/discovery/v2/venues/ZK98xZKrZeF1aZup5QQKr?locale=it-it",
          },
        ],
      },
      _embedded: {
        venues: [
          {
            name: "Auditorium Conciliazione",
            type: "venue",
            id: "ZK98xZKrZeF1aZup5QQKr",
            test: false,
            locale: "it-it",
            postalCode: "00193",
            city: {
              name: "Roma",
            },
            country: {
              name: "Italia",
              countryCode: "IT",
            },
            location: {
              longitude: "12.463698",
              latitude: "41.903266",
            },
            upcomingEvents: {
              _total: 0,
              _filtered: 0,
            },
            _links: {
              self: {
                href: "/discovery/v2/venues/ZK98xZKrZeF1aZup5QQKr?locale=it-it",
              },
            },
          },
        ],
        attractions: [
          {
            name: "Fast Animals and Slow Kids",
            type: "attraction",
            id: "K8vZ917_bm0",
            test: false,
            url: "https://www.ticketmaster.com/fast-animals-and-slow-kids-tickets/artist/2787913",
            locale: "it-it",
            images: [
              {
                ratio: "3_2",
                url: "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_ARTIST_PAGE_3_2.jpg",
                width: 305,
                height: 203,
                fallback: true,
              },
              {
                ratio: "3_2",
                url: "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_RETINA_PORTRAIT_3_2.jpg",
                width: 640,
                height: 427,
                fallback: true,
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_EVENT_DETAIL_PAGE_16_9.jpg",
                width: 205,
                height: 115,
                fallback: true,
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_RETINA_PORTRAIT_16_9.jpg",
                width: 640,
                height: 360,
                fallback: true,
              },
              {
                ratio: "4_3",
                url: "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_CUSTOM.jpg",
                width: 305,
                height: 225,
                fallback: true,
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_RETINA_LANDSCAPE_16_9.jpg",
                width: 1136,
                height: 639,
                fallback: true,
              },
              {
                ratio: "3_2",
                url: "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_TABLET_LANDSCAPE_3_2.jpg",
                width: 1024,
                height: 683,
                fallback: true,
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_TABLET_LANDSCAPE_16_9.jpg",
                width: 1024,
                height: 576,
                fallback: true,
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_RECOMENDATION_16_9.jpg",
                width: 100,
                height: 56,
                fallback: true,
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/c/f50/96fa13be-e395-429b-8558-a51bb9054f50_105951_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                width: 2048,
                height: 1152,
                fallback: true,
              },
            ],
            classifications: [
              {
                primary: true,
                segment: {
                  id: "KZFzniwnSyZfZ7v7nJ",
                },
                genre: {
                  id: "KnvZfZ7vAvv",
                },
                subGenre: {
                  id: "KZazBEonSMnZfZ7vAvn",
                },
                type: {
                  id: "KZAyXgnZfZ7v7l1",
                },
                subType: {
                  id: "KZFzBErXgnZfZ7vA71",
                },
                family: false,
              },
            ],
            upcomingEvents: {
              _total: 0,
              _filtered: 0,
            },
            _links: {
              self: {
                href: "/discovery/v2/attractions/K8vZ917_bm0?locale=it-it",
              },
            },
          },
        ],
      },
    },
  ];

  return (
    <div>
      {events.map((event) => (
        <CartItem data={event} key={event.id} />
      ))}
    </div>
  );
};

export default CartList;
