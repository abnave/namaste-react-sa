import React from "react";
import ReactDOM from "react-dom/client";

const restList = [
  {
    info: {
      id: "550765",
      name: "PK Biryani House",
      cloudinaryImageId: "azsn1pteanzl3figss5k",
      locality: "Shri Krishna Colony",
      areaName: "Warje",
      costForTwo: "₹350 for two",
      cuisines: ["Biryani", "North Indian", "Indian", "Snacks"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "550765",
        fees: [
          { name: "BASE_DISTANCE", fee: 5600 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 5600,
      },
      parentId: "3260",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=6539482~p=1~eid=00000188-153d-181c-4ad2-5e2b000c0139~45826",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 6.2,
        serviceability: "SERVICEABLE",
        slaString: "37 mins",
        lastMileTravelString: "6.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-13 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=550765",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "484596",
      name: "KFC",
      cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
      locality: "Bhugaon",
      areaName: "Bavdhan",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "484596",
        fees: [
          { name: "BASE_DISTANCE", fee: 3200 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 3200,
      },
      parentId: "547",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-14 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {
        header: "20% OFF",
        shortDescriptionList: [
          {
            meta: "Use SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 on select items | Use code SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=484596",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "217027",
      name: "Domino's Pizza",
      cloudinaryImageId: "gkikursi3tpmxa7nhg2j",
      locality: "Rosewood",
      areaName: "Bavdhan",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "217027",
        fees: [
          { name: "BASE_DISTANCE", fee: 3200 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 3200,
      },
      parentId: "2456",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-13 22:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=217027",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "689800",
      name: "Ganesh Bhel",
      cloudinaryImageId: "532cbba17786c5b721bb6d597a2f8b49",
      locality: "Karve Road",
      areaName: "Bavdhan",
      costForTwo: "₹110 for two",
      cuisines: ["Snacks", "Chaat"],
      avgRating: 4.6,
      feeDetails: {
        restaurantId: "689800",
        fees: [
          { name: "BASE_DISTANCE", fee: 3200 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 3200,
      },
      parentId: "1772",
      avgRatingString: "4.6",
      totalRatingsString: "20+",
      promoted: true,
      adTrackingId:
        "cid=6762257~p=2~eid=00000188-153d-181c-4ad2-5e2c000c024c~45826",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 0.7,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "0.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-13 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
      isNewlyOnboarded: true,
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=689800",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "11876",
      name: "Subway",
      cloudinaryImageId: "0bf19a82b109b40c2f5c56d00f071a33",
      locality: "Aditya Shagun Mall",
      areaName: "Bavdhan",
      costForTwo: "₹350 for two",
      cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "11876",
        fees: [
          { name: "BASE_DISTANCE", fee: 3200 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 3200,
      },
      parentId: "2",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "33 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-13 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {
        header: "20% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=11876",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "303296",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      cloudinaryImageId: "abbhetnc04iqbs5kjdik",
      locality: "Gangotri",
      areaName: "Bavdhan",
      costForTwo: "₹300 for two",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      avgRating: 4.4,
      veg: true,
      feeDetails: {
        restaurantId: "303296",
        fees: [
          { name: "BASE_DISTANCE", fee: 3200 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 3200,
      },
      parentId: "582",
      avgRatingString: "4.4",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-13 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=303296",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "508668",
      name: "Shaker's",
      cloudinaryImageId: "uh74b5hg7mtul97ai2x1",
      locality: "Paud Road",
      areaName: "Kothrud",
      costForTwo: "₹300 for two",
      cuisines: ["Beverages"],
      feeDetails: {
        restaurantId: "508668",
        fees: [
          { name: "BASE_DISTANCE", fee: 3800 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 3800,
      },
      parentId: "8223",
      avgRatingString: "--",
      promoted: true,
      adTrackingId:
        "cid=6562877~p=3~eid=00000188-153d-181c-4ad2-5e2d000c037f~45826",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 3.8,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
        lastMileTravelString: "3.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-13 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=508668",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "702967",
      name: "Theobroma",
      cloudinaryImageId: "4636cc69bbd8245604f7bc4c4d36df55",
      locality: "Shreepal CHS",
      areaName: "Bavdhan",
      costForTwo: "₹800 for two",
      cuisines: ["Bakery", "Desserts", "Beverages"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "702967",
        fees: [
          { name: "BASE_DISTANCE", fee: 3200 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 3200,
      },
      parentId: "1040",
      avgRatingString: "4.3",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-13 23:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
      isNewlyOnboarded: true,
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=702967",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "18801",
      name: "Faasos - Wraps & Rolls",
      cloudinaryImageId: "85c20ed30425350ac5ee96f10d5d1329",
      locality: "Near Jaihind Hospital",
      areaName: "Bavdhan",
      costForTwo: "₹200 for two",
      cuisines: [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "North Indian",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "18801",
        fees: [
          { name: "BASE_DISTANCE", fee: 3200 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 3200,
      },
      parentId: "21809",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-14 03:00:00",
        opened: true,
      },
      badges: {
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
          textBased: {},
          imageBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  description: "",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=18801",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "340129",
      name: "Mad Over Donuts",
      cloudinaryImageId: "06944797a7dfa9b66142efd6b6f1e8b2",
      locality: "Dsk Ranwara",
      areaName: "Bavdhan",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Sweets", "Bakery"],
      avgRating: 4.1,
      veg: true,
      feeDetails: {
        restaurantId: "340129",
        fees: [
          { name: "BASE_DISTANCE", fee: 3200 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 3200,
      },
      parentId: "611",
      avgRatingString: "4.1",
      totalRatingsString: "500+",
      promoted: true,
      adTrackingId:
        "cid=6693592~p=4~eid=00000188-153d-181c-4ad2-5e2e000c0443~45826",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-13 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=340129",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "144278",
      name: "Oven Story Pizza",
      cloudinaryImageId: "ab979bffbd658e74de650a15ca0092a3",
      locality: "Near Jaihind Hospital",
      areaName: "Bavdhan",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "144278",
        fees: [
          { name: "BASE_DISTANCE", fee: 4400 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 4400,
      },
      parentId: "3534",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 4.3,
        serviceability: "SERVICEABLE",
        slaString: "30-40 mins",
        lastMileTravelString: "4.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-14 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {
        header: "₹125 OFF",
        shortDescriptionList: [
          {
            meta: "Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=144278",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "32455",
      name: "Natural Ice Cream",
      cloudinaryImageId: "ps1dy8hsgahykrztvsue",
      locality: "Shinde Nagar",
      areaName: "Bavdhan",
      costForTwo: "₹150 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.6,
      veg: true,
      feeDetails: {
        restaurantId: "32455",
        fees: [
          { name: "BASE_DISTANCE", fee: 4400 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 4400,
      },
      parentId: "2093",
      avgRatingString: "4.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 4.9,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "4.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-13 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {
        header: "40% OFF",
        shortDescriptionList: [
          {
            meta: "Use SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=32455",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "608951",
      name: "GetAWay-Desserts",
      cloudinaryImageId: "2e93c40100a50e4bfabce89c35154ec6",
      locality: "Pashan",
      areaName: "Baner",
      costForTwo: "₹150 for two",
      cuisines: ["Healthy Food", "Ice Cream", "Desserts", "Sweets", "Bakery"],
      avgRating: 4.6,
      veg: true,
      feeDetails: {
        restaurantId: "608951",
        fees: [
          { name: "BASE_DISTANCE", fee: 5000 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 5000,
      },
      parentId: "354819",
      avgRatingString: "4.6",
      totalRatingsString: "20+",
      promoted: true,
      adTrackingId:
        "cid=6679353~p=6~eid=00000188-153d-181c-4ad2-5e30000c060c~45826",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "35 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-14 00:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use SPECIALS",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 on select items | Use code SPECIALS",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  iconId: "guiltfree/GF_Logo_android_3x",
                  description: "",
                  shortDescription: "options available",
                  fontColor: "#7E808C",
                },
              },
            ],
          },
          textBased: {},
          imageBased: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=608951",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "613996",
      name: "Chinese Wok",
      cloudinaryImageId: "58ee0c742e8d56c3475db9ced65d2d47",
      locality: "Paud Road",
      areaName: "Kothrud",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Pan-Asian", "Tibetan"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "613996",
        fees: [
          { name: "BASE_DISTANCE", fee: 3800 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 3800,
      },
      parentId: "61955",
      avgRatingString: "4.0",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-14 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {
        header: "₹125 OFF",
        shortDescriptionList: [
          {
            meta: "Use MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=613996",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "38806",
      name: "Bread Story",
      cloudinaryImageId: "pewx9xdr1epk9d2cydzc",
      locality: "Bavdhan Budruk",
      areaName: "Bavdhan",
      costForTwo: "₹350 for two",
      cuisines: ["Bakery"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "38806",
        fees: [
          { name: "BASE_DISTANCE", fee: 3200 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 3200,
      },
      parentId: "3846",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-13 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=38806",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "225785",
      name: "Cake N Balloons",
      cloudinaryImageId: "ute8d0d1dcetikadghpu",
      locality: "Karve Road",
      areaName: "Kothrud",
      costForTwo: "₹450 for two",
      cuisines: ["Desserts", "Bakery"],
      avgRating: 3.7,
      feeDetails: {
        restaurantId: "225785",
        fees: [
          { name: "BASE_DISTANCE", fee: 5000 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 5000,
      },
      parentId: "11815",
      avgRatingString: "3.7",
      totalRatingsString: "500+",
      promoted: true,
      adTrackingId:
        "cid=6708131~p=7~eid=00000188-153d-181c-4ad2-5e31000c0715~45826",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-13 22:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {
        header: "20% OFF",
        shortDescriptionList: [
          {
            meta: "Use JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹120 on orders above ₹479 | Use code JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=225785",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "647459",
      name: "Frozen Bottle - Milkshakes, Desserts And Ice Cream",
      cloudinaryImageId: "526e8ec7803bf2eb74cf75b9c9e24093",
      locality: "Bramha Vantage",
      areaName: "Bavdhan",
      costForTwo: "₹250 for two",
      cuisines: [
        "Beverages",
        "Desserts",
        "Ice Cream",
        "Waffle",
        "Bakery",
        "Healthy Food",
      ],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "647459",
        fees: [
          { name: "BASE_DISTANCE", fee: 3200 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 3200,
      },
      parentId: "5655",
      avgRatingString: "4.2",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-14 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {
        header: "20% OFF",
        shortDescriptionList: [
          {
            meta: "Use PARTY",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off | Use code PARTY",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
      isNewlyOnboarded: true,
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=647459",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "55950",
      name: "Eagle Brother's Pizza",
      cloudinaryImageId: "bhkyqlohbwkrsyybdrnh",
      locality: "Bavdhan",
      areaName: "Aditya Shagun Mall",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Italian"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "55950",
        fees: [
          { name: "BASE_DISTANCE", fee: 3200 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 3200,
      },
      parentId: "75701",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "35 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-14 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=55950",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "690703",
      name: "Kizoo Kid's Dessert.",
      cloudinaryImageId: "09e16531bb9244535823dfc53f047a4e",
      locality: "Karve Road",
      areaName: "Bavdhan",
      costForTwo: "₹180 for two",
      cuisines: ["Ice Cream", "Desserts"],
      feeDetails: {
        restaurantId: "690703",
        fees: [
          { name: "BASE_DISTANCE", fee: 3200 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 3200,
      },
      parentId: "410549",
      avgRatingString: "NEW",
      promoted: true,
      adTrackingId:
        "cid=6722060~p=8~eid=00000188-153d-181c-4ad2-5e32000c087c~45826",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 0.2,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "0.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-14 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {
        header: "15% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "15% off up to ₹45 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
      isNewlyOnboarded: true,
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=690703",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "377526",
      name: "CRAZY CHEESY ( Bhavdan)",
      cloudinaryImageId: "08e14182422ec9399c65c9df84099434",
      locality: "Amachi Colony",
      areaName: "Bavdhan",
      costForTwo: "₹500 for two",
      cuisines: ["Pizzas", "Pastas", "American", "Italian"],
      avgRating: 4,
      veg: true,
      feeDetails: {
        restaurantId: "377526",
        fees: [
          { name: "BASE_DISTANCE", fee: 3200 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 3200,
      },
      parentId: "10638",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-13 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=377526",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "710760",
      name: "Combo Delight",
      cloudinaryImageId: "edf7faef3a2a7cd17fa65385e3d76ed8",
      locality: "Poud Road",
      areaName: "Kothrud",
      costForTwo: "₹100 for two",
      cuisines: ["North Indian", "Snacks"],
      feeDetails: {
        restaurantId: "710760",
        fees: [
          { name: "BASE_DISTANCE", fee: 4400 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 4400,
      },
      parentId: "18728",
      avgRatingString: "NEW",
      promoted: true,
      adTrackingId:
        "cid=6751170~p=9~eid=00000188-153d-181c-4ad2-5e33000c0956~45826",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "38 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-13 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {
        header: "30% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹75 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
      isNewlyOnboarded: true,
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=710760",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "9398",
      name: "Cafe Peter",
      cloudinaryImageId: "xxqgas1rqc2zbbshhlg6",
      locality: "Nda Pashan Road",
      areaName: "Bavdhan",
      costForTwo: "₹400 for two",
      cuisines: ["Italian", "Desserts"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "9398",
        fees: [
          { name: "BASE_DISTANCE", fee: 3200 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 3200,
      },
      parentId: "10635",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-13 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {
        header: "30% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹75 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=9398",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "470192",
      name: "Greens and Breads",
      cloudinaryImageId: "hchy7gown4d9lenlyd0h",
      locality: "Paud Road",
      areaName: "Bavdhan",
      costForTwo: "₹250 for two",
      cuisines: ["Healthy Food", "American", "Salads", "Continental", "Grill"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "470192",
        fees: [
          { name: "BASE_DISTANCE", fee: 3800 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 3800,
      },
      parentId: "8894",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 3.8,
        serviceability: "SERVICEABLE",
        slaString: "34 mins",
        lastMileTravelString: "3.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-13 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {
        header: "₹125 OFF",
        shortDescriptionList: [
          {
            meta: "Use MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=470192",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "684975",
      name: "Brgrmeister",
      cloudinaryImageId: "6e0d63e2851ff1030770cc243b75b3e3",
      locality: "Karve Road",
      areaName: "Kothrud",
      costForTwo: "₹400 for two",
      cuisines: ["Fast Food", "Snacks"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "684975",
        fees: [
          { name: "BASE_DISTANCE", fee: 3800 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 3800,
      },
      parentId: "50023",
      avgRatingString: "4.1",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-14 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {
        header: "₹150 OFF",
        shortDescriptionList: [
          {
            meta: "Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FLAT150 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
      isNewlyOnboarded: true,
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=684975",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "435053",
      name: "Crazy Momos",
      cloudinaryImageId: "k9vemdz2razd32ansoqr",
      locality: "Nda Road",
      areaName: "Bavdhan",
      costForTwo: "₹200 for two",
      cuisines: ["Continental", "Italian"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "435053",
        fees: [
          { name: "BASE_DISTANCE", fee: 3200 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 3200,
      },
      parentId: "65779",
      avgRatingString: "4.1",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-05-13 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {
        header: "10% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "10% off up to ₹40 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=435053",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
];
const RestaurantCard = (props) => {
  const { restData } = props;
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRatingString } =
    restData?.info;
  const { deliveryTime } = restData?.info?.sla;  

  return (
    <div className="rest-card">
      <img
        className="rest-logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      ></img>
      <h2>{name}</h2>

      <h4>{cuisines.join(", ")}</h4>
      
      <span>
        <h4>{costForTwo}</h4>
        <h4>{avgRatingString} ⭐</h4>
        <h4>{"Expected in " + deliveryTime + " Mins"}</h4>
      </span>
      
    </div>
  );
};
const BodyComponent = () => {
  return (
    <div className="body-container">
      <div className="search-container"></div>
      <div className="rest-container">
        {restList.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant?.info?.id} restData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};
const HeaderComponent = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart </li>
        </ul>
      </div>
    </div>
  );
};
const FooterComponent = () => {
  return <div className="footer-container"></div>;
};
const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
//  "main": "app.js",
