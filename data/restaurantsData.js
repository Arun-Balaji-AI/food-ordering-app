const resData = {
  card: {
    card: {
      "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
      header: {
        title: "Top restaurant chains in Coimbatore",
        action: {},
        headerStyling: {
          padding: {
            left: 16,
            top: 28,
            bottom: 18,
          },
        },
      },
      layout: {
        rows: 1,
        columns: 20,
        horizontalScrollEnabled: true,
        itemSpacing: 32,
        widgetPadding: {},
        containerStyle: {
          containerPadding: {
            left: 16,
            right: 12,
            bottom: 12,
          },
        },
        scrollBar: {
          scrollThumbColor: "#E46D47",
          scrollTrackColor: "#02060C",
          width: 54,
          height: 4,
          scrollStyling: {
            padding: {
              top: 6,
              bottom: 24,
            },
          },
        },
        widgetTheme: {
          defaultMode: {
            backgroundColour: "#1B3028",
            theme: "THEME_TYPE_DARK",
          },
          darkMode: {
            backgroundColour: "#1B3028",
            theme: "THEME_TYPE_DARK",
          },
        },
      },
      id: "top_brands_for_you",
      gridElements: {
        infoWithStyle: {
          "@type":
            "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
          restaurants: [
            {
              info: {
                id: "582150",
                name: "Chinese Wok",
                cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
                locality: "Avinashi Road",
                areaName: "Peelamedu",
                costForTwo: "₹250 for two",
                cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
                avgRating: 4.3,
                parentId: "61955",
                avgRatingString: "4.3",
                totalRatingsString: "2.0K+",
                sla: {
                  deliveryTime: 34,
                  lastMileTravel: 7.6,
                  serviceability: "SERVICEABLE",
                  slaString: "30-35 mins",
                  lastMileTravelString: "7.6 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-09-30 02:00:00",
                  opened: true,
                },
                badges: {
                  imageBadges: [
                    {
                      imageId:
                        "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
                      description: "Delivery!",
                    },
                  ],
                },
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "Delivery!",
                            imageId:
                              "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
                          },
                        },
                      ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "ITEMS",
                  subHeader: "AT ₹199",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/city/coimbatore/chinese-wok-avinashi-road-peelamedu-rest582150",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "575570",
                name: "Nagerkovil Arya Bhavan",
                cloudinaryImageId: "yj6g7wugbi5qbvjtoqmr",
                locality: "Peelamedu",
                areaName: "Peelamedu",
                costForTwo: "₹200 for two",
                cuisines: ["South Indian", "Chinese"],
                avgRating: 4.6,
                veg: true,
                parentId: "353249",
                avgRatingString: "4.6",
                totalRatingsString: "41K+",
                sla: {
                  deliveryTime: 30,
                  lastMileTravel: 5,
                  serviceability: "SERVICEABLE",
                  slaString: "30-35 mins",
                  lastMileTravelString: "5.0 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-09-29 22:45:00",
                  opened: true,
                },
                badges: {
                  imageBadges: [
                    {
                      imageId:
                        "Green%20Dot%20Awards/Best%20In%20Idli%20Vada.png",
                      description: "Delivery!",
                    },
                  ],
                  textExtendedBadges: [
                    {
                      iconId: "guiltfree/GF_Logo_android_3x",
                      shortDescription: "options available",
                      fontColor: "#7E808C",
                    },
                  ],
                },
                isOpen: true,
                aggregatedDiscountInfoV2: {},
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "Delivery!",
                            imageId:
                              "Green%20Dot%20Awards/Best%20In%20Idli%20Vada.png",
                          },
                        },
                      ],
                    },
                    textBased: {},
                    textExtendedBadges: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "",
                            fontColor: "#7E808C",
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                          },
                        },
                      ],
                    },
                  },
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "4.3",
                    ratingCount: "7.3K+",
                  },
                  source: "GOOGLE",
                  sourceIconImageId:
                    "v1704440323/google_ratings/rating_google_tag",
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/city/coimbatore/nagerkovil-arya-bhavan-peelamedu-rest575570",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "67645",
                name: "Night Lion by Madhampatty Pakashala",
                cloudinaryImageId: "qgck9fzi17ljdvwboljb",
                locality: "Gauthama Puri Nagar",
                areaName: "Peelamedu",
                costForTwo: "₹300 for two",
                cuisines: ["South Indian", "Chinese", "Haleem"],
                avgRating: 4.4,
                parentId: "377170",
                avgRatingString: "4.4",
                totalRatingsString: "67K+",
                sla: {
                  deliveryTime: 36,
                  lastMileTravel: 7.6,
                  serviceability: "SERVICEABLE",
                  slaString: "35-40 mins",
                  lastMileTravelString: "7.6 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-09-30 03:00:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                aggregatedDiscountInfoV2: {},
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/city/coimbatore/night-lion-by-madhampatty-pakashala-gauthama-puri-nagar-peelamedu-rest67645",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "61498",
                name: "Geetha Canteen",
                cloudinaryImageId: "d307f820c640fc02dd6242a358e69a79",
                locality: "Gandhipuram",
                areaName: "Gandhipuram",
                costForTwo: "₹100 for two",
                cuisines: ["South Indian"],
                avgRating: 4.5,
                veg: true,
                parentId: "6459",
                avgRatingString: "4.5",
                totalRatingsString: "104K+",
                sla: {
                  deliveryTime: 20,
                  lastMileTravel: 1.9,
                  serviceability: "SERVICEABLE",
                  slaString: "15-20 mins",
                  lastMileTravelString: "1.9 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-09-29 11:00:00",
                  opened: true,
                },
                badges: {
                  imageBadges: [
                    {
                      imageId:
                        "Green%20Dot%20Awards/Best%20In%20Veg%20South%20Indian.png",
                      description: "Delivery!",
                    },
                    {
                      imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                      description: "Delivery!",
                    },
                    {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  ],
                },
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "Delivery!",
                            imageId:
                              "Green%20Dot%20Awards/Best%20In%20Veg%20South%20Indian.png",
                          },
                        },
                        {
                          attributes: {
                            description: "Delivery!",
                            imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                          },
                        },
                        {
                          attributes: {
                            description: "pureveg",
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                          },
                        },
                      ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "ITEMS",
                  subHeader: "AT ₹15",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "4.3",
                    ratingCount: "7.6K+",
                  },
                  source: "GOOGLE",
                  sourceIconImageId:
                    "v1704440323/google_ratings/rating_google_tag",
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/city/coimbatore/geetha-canteen-gandhipuram-rest61498",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "60005",
                name: "Thirupathi Mess",
                cloudinaryImageId: "bzwckbvw6k8ncyw3lkfi",
                locality: "Ramanathapuram",
                areaName: "Ramanathapuram",
                costForTwo: "₹100 for two",
                cuisines: ["South Indian", "Indian"],
                avgRating: 4.6,
                parentId: "215840",
                avgRatingString: "4.6",
                totalRatingsString: "102K+",
                sla: {
                  deliveryTime: 32,
                  lastMileTravel: 6.8,
                  serviceability: "SERVICEABLE",
                  slaString: "30-35 mins",
                  lastMileTravelString: "6.8 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-09-29 16:00:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "10% OFF",
                  subHeader: "UPTO ₹40",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "4.1",
                    ratingCount: "3.2K+",
                  },
                  source: "GOOGLE",
                  sourceIconImageId:
                    "v1704440323/google_ratings/rating_google_tag",
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/city/coimbatore/thirupathi-mess-ramanathapuram-rest60005",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "58703",
                name: "RHR Hotels",
                cloudinaryImageId: "2f42cc29f6c76d9dbe4752cc5cfc855b",
                locality: "Chetpet",
                areaName: "Race Course",
                costForTwo: "₹200 for two",
                cuisines: ["South Indian"],
                avgRating: 4.4,
                veg: true,
                parentId: "5813",
                avgRatingString: "4.4",
                totalRatingsString: "12K+",
                sla: {
                  deliveryTime: 23,
                  lastMileTravel: 4.2,
                  serviceability: "SERVICEABLE",
                  slaString: "20-25 mins",
                  lastMileTravelString: "4.2 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-09-29 22:30:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "20% OFF",
                  subHeader: "UPTO ₹50",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "4.1",
                    ratingCount: "36K+",
                  },
                  source: "GOOGLE",
                  sourceIconImageId:
                    "v1704440323/google_ratings/rating_google_tag",
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/city/coimbatore/rhr-hotels-chetpet-race-course-rest58703",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "53332",
                name: "Shree Aksshayam",
                cloudinaryImageId: "bc2eb057b8474efce6932bb4335d950e",
                locality: "Peelamedu",
                areaName: "Peelamedu",
                costForTwo: "₹200 for two",
                cuisines: ["South Indian", "Chinese"],
                avgRating: 4.5,
                veg: true,
                parentId: "7115",
                avgRatingString: "4.5",
                totalRatingsString: "94K+",
                sla: {
                  deliveryTime: 25,
                  lastMileTravel: 4.2,
                  serviceability: "SERVICEABLE",
                  slaString: "20-25 mins",
                  lastMileTravelString: "4.2 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-09-29 22:30:00",
                  opened: true,
                },
                badges: {
                  imageBadges: [
                    {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  ],
                },
                isOpen: true,
                aggregatedDiscountInfoV2: {},
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "pureveg",
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                          },
                        },
                      ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "4.1",
                    ratingCount: "11K+",
                  },
                  source: "GOOGLE",
                  sourceIconImageId:
                    "v1704440323/google_ratings/rating_google_tag",
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/city/coimbatore/shree-aksshayam-peelamedu-rest53332",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "51014",
                name: "A2B - Adyar Ananda Bhavan",
                cloudinaryImageId: "jlqmqtcbgxu3ype0idyq",
                locality: "Gandhipuram",
                areaName: "Gandhipuram",
                costForTwo: "₹300 for two",
                cuisines: ["South Indian", "North Indian", "Sweets", "Chinese"],
                avgRating: 4.6,
                veg: true,
                parentId: "22",
                avgRatingString: "4.6",
                totalRatingsString: "30K+",
                sla: {
                  deliveryTime: 21,
                  lastMileTravel: 2.5,
                  serviceability: "SERVICEABLE",
                  slaString: "20-25 mins",
                  lastMileTravelString: "2.5 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-09-29 22:45:00",
                  opened: true,
                },
                badges: {
                  imageBadges: [
                    {
                      imageId: "Green%20Dot%20Awards/Best%20In%20Dosa.png",
                      description: "Delivery!",
                    },
                    {
                      imageId:
                        "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
                      description: "Delivery!",
                    },
                    {
                      imageId:
                        "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                      description: "OnlyOnSwiggy",
                    },
                    {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  ],
                },
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "Delivery!",
                            imageId:
                              "Green%20Dot%20Awards/Best%20In%20Dosa.png",
                          },
                        },
                        {
                          attributes: {
                            description: "Delivery!",
                            imageId:
                              "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
                          },
                        },
                        {
                          attributes: {
                            description: "OnlyOnSwiggy",
                            imageId:
                              "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                          },
                        },
                        {
                          attributes: {
                            description: "pureveg",
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                          },
                        },
                      ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "₹75 OFF",
                  subHeader: "ABOVE ₹199",
                  discountTag: "FLAT DEAL",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "3.9",
                    ratingCount: "10K+",
                  },
                  source: "GOOGLE",
                  sourceIconImageId:
                    "v1704440323/google_ratings/rating_google_tag",
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/city/coimbatore/a2b-adyar-ananda-bhavan-gandhipuram-rest51014",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "797224",
                name: "Subway",
                cloudinaryImageId:
                  "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/8ff4d852-bdf0-40a4-92d9-b2445b15eeb1_797224.JPG",
                locality: "Krishnaswamy Road",
                areaName: "Brookefields Mall",
                costForTwo: "₹350 for two",
                cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
                avgRating: 4.1,
                parentId: "2",
                avgRatingString: "4.1",
                totalRatingsString: "444",
                sla: {
                  deliveryTime: 25,
                  lastMileTravel: 1.2,
                  serviceability: "SERVICEABLE",
                  slaString: "25-30 mins",
                  lastMileTravelString: "1.2 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-09-29 23:00:00",
                  opened: true,
                },
                badges: {
                  imageBadges: [
                    {
                      imageId: "Rxawards/_CATEGORY-Sandwiches.png",
                      description: "Delivery!",
                    },
                  ],
                },
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "Delivery!",
                            imageId: "Rxawards/_CATEGORY-Sandwiches.png",
                          },
                        },
                      ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "₹150 OFF",
                  subHeader: "ABOVE ₹299",
                  discountTag: "FLAT DEAL",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/city/coimbatore/subway-krishnaswamy-road-brookefields-mall-rest797224",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "844594",
                name: "Starbucks Coffee",
                cloudinaryImageId:
                  "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/20/2b809249-c821-49ff-a611-7019555427fc_844594.JPG",
                locality: "Anupperpalayam",
                areaName: "Avinashi Road",
                costForTwo: "₹400 for two",
                cuisines: [
                  "Beverages",
                  "Cafe",
                  "Snacks",
                  "Desserts",
                  "Bakery",
                  "Ice Cream",
                ],
                avgRating: 4.3,
                parentId: "195515",
                avgRatingString: "4.3",
                totalRatingsString: "219",
                sla: {
                  deliveryTime: 24,
                  lastMileTravel: 4.1,
                  serviceability: "SERVICEABLE",
                  slaString: "20-25 mins",
                  lastMileTravelString: "4.1 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-09-29 23:30:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "50% OFF",
                  subHeader: "UPTO ₹100",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/city/coimbatore/starbucks-coffee-anupperpalayam-avinashi-road-rest844594",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "472770",
                name: "The Dessert Heaven - Pastry, Brownie and Cakes",
                cloudinaryImageId:
                  "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/22/8b210da4-b5c7-4f30-bf3e-fb42080719dd_472770.jpg",
                locality: "SAIBABA COLONY",
                areaName: "NSR Road",
                costForTwo: "₹200 for two",
                cuisines: ["Bakery", "Desserts", "Sweets", "Ice Cream"],
                avgRating: 4.5,
                veg: true,
                parentId: "506176",
                avgRatingString: "4.5",
                totalRatingsString: "880",
                sla: {
                  deliveryTime: 18,
                  lastMileTravel: 2.7,
                  serviceability: "SERVICEABLE",
                  slaString: "15-20 mins",
                  lastMileTravelString: "2.7 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-09-30 01:00:00",
                  opened: true,
                },
                badges: {
                  imageBadges: [
                    {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  ],
                },
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "pureveg",
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                          },
                        },
                      ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "60% OFF",
                  subHeader: "UPTO ₹120",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/city/coimbatore/the-dessert-heaven-pastry-brownie-and-cakes-saibaba-colony-nsr-road-rest472770",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "690587",
                name: "Ovenfresh Cakes And Desserts",
                cloudinaryImageId:
                  "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/22/8aa7ee64-c462-486a-80b4-1f6dab69cd88_690587.jpg",
                locality: "SRP Nagar",
                areaName: "Sai Baba Colony",
                costForTwo: "₹200 for two",
                cuisines: [
                  "Bakery",
                  "Desserts",
                  "Beverages",
                  "Ice Cream",
                  "Sweets",
                  "Juices",
                  "Bengali",
                  "Pizzas",
                ],
                avgRating: 4.3,
                parentId: "1372",
                avgRatingString: "4.3",
                totalRatingsString: "232",
                sla: {
                  deliveryTime: 26,
                  lastMileTravel: 2.7,
                  serviceability: "SERVICEABLE",
                  slaString: "25-30 mins",
                  lastMileTravelString: "2.7 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-09-30 01:00:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "60% OFF",
                  subHeader: "UPTO ₹120",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/city/coimbatore/ovenfresh-cakes-and-desserts-srp-nagar-sai-baba-colony-rest690587",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "440611",
                name: "Home Plate by EatFit",
                cloudinaryImageId: "1d578bb732e03c6f591790eb7d2d88e2",
                locality: "SRP Nagar II",
                areaName: "Saibaba Colony",
                costForTwo: "₹250 for two",
                cuisines: [
                  "North Indian",
                  "Home Food",
                  "Healthy Food",
                  "Indian",
                  "Punjabi",
                  "South Indian",
                  "Rajasthani",
                  "Maharashtrian",
                  "Snacks",
                  "Desserts",
                  "Beverages",
                ],
                avgRating: 4.2,
                parentId: "301197",
                avgRatingString: "4.2",
                totalRatingsString: "952",
                sla: {
                  deliveryTime: 21,
                  lastMileTravel: 2.7,
                  serviceability: "SERVICEABLE",
                  slaString: "20-25 mins",
                  lastMileTravelString: "2.7 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-09-30 01:00:00",
                  opened: true,
                },
                badges: {
                  imageBadges: [
                    {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  ],
                  textExtendedBadges: [
                    {
                      iconId: "guiltfree/GF_Logo_android_3x",
                      shortDescription: "options available",
                      fontColor: "#7E808C",
                    },
                  ],
                },
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "pureveg",
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                          },
                        },
                      ],
                    },
                    textBased: {},
                    textExtendedBadges: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "",
                            fontColor: "#7E808C",
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                          },
                        },
                      ],
                    },
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "ITEMS",
                  subHeader: "AT ₹89",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/city/coimbatore/home-plate-by-eatfit-srp-nagar-ii-saibaba-colony-rest440611",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "440610",
                name: "Great Indian Khichdi by EatFit",
                cloudinaryImageId: "6e44fd7f1e5cd9967edfe47c10247671",
                locality: "SRP Nagar II",
                areaName: "Saibaba Colony",
                costForTwo: "₹200 for two",
                cuisines: [
                  "Home Food",
                  "Indian",
                  "North Indian",
                  "Healthy Food",
                  "Snacks",
                  "Desserts",
                  "Rajasthani",
                  "South Indian",
                  "Maharashtrian",
                  "Sweets",
                ],
                avgRating: 4.4,
                parentId: "319582",
                avgRatingString: "4.4",
                totalRatingsString: "891",
                sla: {
                  deliveryTime: 23,
                  lastMileTravel: 2.7,
                  serviceability: "SERVICEABLE",
                  slaString: "20-25 mins",
                  lastMileTravelString: "2.7 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-09-30 01:00:00",
                  opened: true,
                },
                badges: {
                  imageBadges: [
                    {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  ],
                },
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "pureveg",
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                          },
                        },
                      ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "ITEMS",
                  subHeader: "AT ₹89",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/city/coimbatore/great-indian-khichdi-by-eatfit-srp-nagar-ii-saibaba-colony-rest440610",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "826634",
                name: "Pastas By Pizza Hut",
                cloudinaryImageId:
                  "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/09e6e7e2-9e09-4d04-a0c2-2f13e32734b7_826634.JPG",
                locality: "Avinash Road",
                areaName: "Peelamedu",
                costForTwo: "₹400 for two",
                cuisines: ["Pastas"],
                avgRating: 4.1,
                parentId: "306806",
                avgRatingString: "4.1",
                totalRatingsString: "54",
                sla: {
                  deliveryTime: 33,
                  lastMileTravel: 4.3,
                  serviceability: "SERVICEABLE",
                  slaString: "30-35 mins",
                  lastMileTravelString: "4.3 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-09-30 01:00:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "50% OFF",
                  subHeader: "UPTO ₹100",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/city/coimbatore/pastas-by-pizza-hut-avinash-road-peelamedu-rest826634",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "420289",
                name: "McDonald's Gourmet Burger Collection",
                cloudinaryImageId: "ku2uxnl5m4suc7jkyhou",
                locality: "Fun Mall",
                areaName: "Periyar Nagar",
                costForTwo: "₹600 for two",
                cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
                avgRating: 4.6,
                parentId: "10761",
                avgRatingString: "4.6",
                totalRatingsString: "192",
                sla: {
                  deliveryTime: 35,
                  lastMileTravel: 7.1,
                  serviceability: "SERVICEABLE",
                  slaString: "30-35 mins",
                  lastMileTravelString: "7.1 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-09-29 23:45:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "50% OFF",
                  subHeader: "UPTO ₹100",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/city/coimbatore/mcdonalds-gourmet-burger-collection-fun-mall-periyar-nagar-rest420289",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "263755",
                name: "Pure Veg Meals by LunchBox",
                cloudinaryImageId: "brud7dxxglw8aqsjdc9h",
                locality: "Mettupalayam road",
                areaName: "Ranganathapuram",
                costForTwo: "₹200 for two",
                cuisines: ["Biryani", "North Indian", "Desserts", "Beverages"],
                avgRating: 4.4,
                veg: true,
                parentId: "21938",
                avgRatingString: "4.4",
                totalRatingsString: "359",
                sla: {
                  deliveryTime: 29,
                  lastMileTravel: 1.1,
                  serviceability: "SERVICEABLE",
                  slaString: "25-30 mins",
                  lastMileTravelString: "1.1 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-09-29 23:59:00",
                  opened: true,
                },
                badges: {
                  imageBadges: [
                    {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  ],
                },
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "pureveg",
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                          },
                        },
                      ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "ITEMS",
                  subHeader: "AT ₹159",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/city/coimbatore/pure-veg-meals-by-lunchbox-mettupalayam-road-ranganathapuram-rest263755",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "722815",
                name: "FNP Cakes By Ferns N Petals",
                cloudinaryImageId:
                  "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/8/f795bcfb-1cdd-4933-8b9b-a049c0034c95_722815.jpg",
                locality: "Sai Baba Colony",
                areaName: "PARK ROAD1",
                costForTwo: "₹499 for two",
                cuisines: [
                  "Desserts",
                  "Bakery",
                  "Sweets",
                  "Ice Cream",
                  "Beverages",
                  "North Indian",
                  "Chinese",
                ],
                avgRating: 4.5,
                veg: true,
                parentId: "339638",
                avgRatingString: "4.5",
                totalRatingsString: "303",
                sla: {
                  deliveryTime: 22,
                  lastMileTravel: 1,
                  serviceability: "SERVICEABLE",
                  slaString: "20-25 mins",
                  lastMileTravelString: "1.0 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-09-29 21:00:00",
                  opened: true,
                },
                badges: {
                  imageBadges: [
                    {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  ],
                },
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {
                      badgeObject: [
                        {
                          attributes: {
                            description: "pureveg",
                            imageId: "v1695133679/badges/Pure_Veg111.png",
                          },
                        },
                      ],
                    },
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "50% OFF",
                  subHeader: "UPTO ₹100",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/city/coimbatore/fnp-cakes-by-ferns-n-petals-sai-baba-colony-park-road1-rest722815",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "801315",
                name: "Makhani Darbar",
                cloudinaryImageId: "c583da4b69d264ffe705e5918fad0e98",
                locality: "RS Puram FC",
                areaName: "Mettupalayam road",
                costForTwo: "₹500 for two",
                cuisines: ["Kebabs", "Mughlai", "Beverages", "Desserts"],
                avgRating: 4.3,
                parentId: "478595",
                avgRatingString: "4.3",
                totalRatingsString: "24",
                sla: {
                  deliveryTime: 26,
                  lastMileTravel: 1.1,
                  serviceability: "SERVICEABLE",
                  slaString: "25-30 mins",
                  lastMileTravelString: "1.1 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-09-29 23:00:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "50% OFF",
                  subHeader: "UPTO ₹100",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/city/coimbatore/makhani-darbar-rs-puram-fc-mettupalayam-road-rest801315",
                type: "WEBLINK",
              },
            },
            {
              info: {
                id: "566302",
                name: "Faasos' Signature Wraps & Rolls",
                cloudinaryImageId: "c583ca6ce40b426797a78ae2ac91f2ec",
                locality: "Mettupalayam road",
                areaName: "Ranganathapuram",
                costForTwo: "₹350 for two",
                cuisines: [
                  "Fast Food",
                  "Snacks",
                  "North Indian",
                  "Desserts",
                  "Beverages",
                ],
                avgRating: 4.2,
                parentId: "340366",
                avgRatingString: "4.2",
                totalRatingsString: "266",
                sla: {
                  deliveryTime: 24,
                  lastMileTravel: 1.1,
                  serviceability: "SERVICEABLE",
                  slaString: "20-25 mins",
                  lastMileTravelString: "1.1 km",
                  iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                  nextCloseTime: "2024-09-29 23:59:00",
                  opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                  entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                  },
                },
                aggregatedDiscountInfoV3: {
                  header: "50% OFF",
                  subHeader: "UPTO ₹100",
                },
                differentiatedUi: {
                  displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  differentiatedUiMediaDetails: {
                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                    lottie: {},
                    video: {},
                  },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
                externalRatings: {
                  aggregatedRating: {
                    rating: "--",
                  },
                },
                ratingsDisplayPreference:
                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              },
              analytics: {},
              cta: {
                link: "https://www.swiggy.com/city/coimbatore/faasos-signature-wraps-and-rolls-mettupalayam-road-ranganathapuram-rest566302",
                type: "WEBLINK",
              },
            },
          ],
          theme: "Restaurant_Group_WebView_SEO_PB_Theme",
          widgetType: "WIDGET_TYPE_POPULAR_BRANDS",
          style: {
            width: {
              type: "TYPE_RELATIVE",
              value: 0.41111112,
              reference: "RELATIVE_DIMENSION_REFERENCE_DEVICE_WIDTH",
            },
            height: {
              type: "TYPE_RELATIVE",
              value: 0.7027027,
              reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
            },
            layoutAlignment: "LAYOUT_ALIGNMENT_LEFT",
          },
          collectionId: "84124",
        },
      },
    },
  },
};

export default resData;
