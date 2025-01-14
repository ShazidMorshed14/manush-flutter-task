const generateUniqueId = () => {
  return Math.random().toString(36).substring(2, 6).toUpperCase();
};

const productsList = [
  {
    id: 11,
    uid: "JCMlSRKuVL",
    title: "Oats - 500 Gm",
    sku: "OAT 500g PCH",
    weight: 500,
    weightUnit: "gm",
    minimumOrderQuantity: 1,
    mrp: 360,
    stock: 100,
    prouductImages: [
      {
        id: 1,
        image:
          "https://cdn.pixabay.com/photo/2020/05/21/10/43/flakes-5200175_640.jpg",
      },
      {
        id: 2,
        image:
          "https://cdn.pixabay.com/photo/2023/04/26/08/09/porridge-7951848_640.jpg",
      },
    ],
    promotion: {
      id: 56,
      createdAt: "2024-12-31T04:40:27.930Z",
      title:
        "ওটস ৫০০ গ্রামে ১-২ কেজি পর্যন্ত প্রতি কেজিতে ৳১০ ছাড়, ৩-৫ কেজি পর্যন্ত প্রতি কেজিতে ৳১৪ ছাড়, ৬-১৭ কেজি পর্যন্ত প্রতি কেজিতে ৳১৬ ছাড়, ১৮-৩৫ কেজি পর্যন্ত প্রতি কেজিতে ৳১৮ ছাড়, ৩৬ কেজির বেশির নিলে প্রতি কেজিতে ৳২০ ছাড়",
      type: "WEIGHT",
      description:
        "ওটস ৫০০ গ্রামে ১-২ কেজি পর্যন্ত প্রতি কেজিতে ৳১০ ছাড়, ৩-৫ কেজি পর্যন্ত প্রতি কেজিতে ৳১৪ ছাড়, ৬-১৭ কেজি পর্যন্ত প্রতি কেজিতে ৳১৬ ছাড়, ১৮-৩৫ কেজি পর্যন্ত প্রতি কেজিতে ৳১৮ ছাড়, ৩৬ কেজির বেশির নিলে প্রতি কেজিতে ৳২০ ছাড়",
      startDate: "2024-12-31T18:00:00.000Z",
      endDate: "2025-01-30T17:59:59.999Z",

      promotionDetails: [
        {
          id: 79,
          uid: "EykKMkEA5G",
          discountType: "FIXED",
          amount: 10,
          percentage: null,
          ruleWeight: 1000,
          minWeight: 1000,
          maxWeight: 2000,
          weightUnit: "gm",
          discountProduct: null,
        },
        {
          id: 80,
          uid: "1nm3Es8CvH",
          discountType: "FIXED",
          amount: 14,
          percentage: null,
          ruleWeight: 1000,
          minWeight: 3000,
          maxWeight: 5000,
          weightUnit: "gm",
          discountProduct: null,
        },
        {
          id: 81,
          uid: "QopDXHOM1H",
          discountType: "FIXED",
          amount: 16,
          percentage: null,
          ruleWeight: 1000,
          minWeight: 6000,
          maxWeight: 17000,
          weightUnit: "gm",
          discountProduct: null,
        },
        {
          id: 82,
          uid: "763vDKr6Vu",
          discountType: "FIXED",
          amount: 18,
          percentage: null,
          ruleWeight: 1000,
          minWeight: 18000,
          maxWeight: 35000,
          weightUnit: "gm",
          discountProduct: null,
        },
        {
          id: 83,
          uid: "CK7GZCscGc",
          discountType: "FIXED",
          amount: 20,
          percentage: null,
          ruleWeight: 1000,
          minWeight: 36000,
          maxWeight: null,
          weightUnit: "gm",
          discountProduct: null,
        },
      ],
    },
  },
  {
    id: 12,
    uid: "JCMlSRKuVL",
    title: "Fresh Banana",
    sku: "Banana PCH",
    weight: 200,
    weightUnit: "gm",
    minimumOrderQuantity: 12,
    mrp: 120,
    stock: 60,
    prouductImages: [
      {
        id: 1,
        image:
          "https://cdn.pixabay.com/photo/2016/09/03/20/48/bananas-1642706_640.jpg",
      },
      {
        id: 2,
        image:
          "https://cdn.pixabay.com/photo/2015/11/05/23/08/banana-1025109_640.jpg",
      },
    ],
    promotion: null,
  },
  {
    id: 13,
    uid: "JCMlSRKuVL",
    title: "Orange",
    sku: "Orange PCH",
    weight: 200,
    weightUnit: "gm",
    minimumOrderQuantity: 12,
    mrp: 100,
    stock: 60,
    prouductImages: [
      {
        id: 1,
        image:
          "https://cdn.pixabay.com/photo/2017/02/26/12/27/oranges-2100108_640.jpg",
      },
      {
        id: 2,
        image:
          "https://cdn.pixabay.com/photo/2012/02/19/18/05/oranges-15046_640.jpg",
      },
    ],
    promotion: null,
  },
  {
    id: 14,
    uid: "JCMlSRKuVL",
    title: "Coca Cola",
    sku: "Coke PCH",
    weight: 1000,
    weightUnit: "ml",
    minimumOrderQuantity: 1,
    mrp: 140,
    stock: 100,
    prouductImages: [
      {
        id: 1,
        image:
          "https://cdn.pixabay.com/photo/2019/03/29/20/36/coca-cola-4090021_1280.jpg",
      },
      {
        id: 2,
        image:
          "https://cdn.pixabay.com/photo/2017/02/19/17/20/drink-2080332_640.jpg",
      },
    ],
    promotion: {
      id: 56,
      createdAt: "2024-12-31T04:40:27.930Z",
      title: "With 2 Ltr of coke bottle get 2 spoons free",
      type: "GWP",
      description: "With 2 Ltr of coke bottle get 2 spoons free",
      startDate: "2024-12-31T18:00:00.000Z",
      endDate: "2025-01-30T17:59:59.999Z",

      promotionDetails: [
        {
          id: 79,
          discountType: "GWP",
          amount: 2,
          percentage: null,
          ruleWeight: 2000,
          minWeight: 2000,
          maxWeight: null,
          weightUnit: "ml",
          discountProduct: {
            id: 120,
            title: "Free spoon(Silver)",
            productImages: [
              {
                id: 1,
                image:
                  "https://cdn.pixabay.com/photo/2016/08/11/16/37/spoon-1586178_640.jpg",
              },
            ],
          },
        },
      ],
    },
  },
  {
    id: 15,
    uid: "JCMlSRKuVL",
    title: "Chips",
    sku: "Chips PCH",
    weight: 120,
    weightUnit: "gm",
    minimumOrderQuantity: 1,
    mrp: 50,
    stock: 60,
    prouductImages: [
      {
        id: 1,
        image:
          "https://cdn.pixabay.com/photo/2024/07/01/04/16/ai-generated-8864312_1280.png",
      },
      {
        id: 2,
        image:
          "https://cdn.pixabay.com/photo/2023/04/26/16/21/chips-7952769_640.jpg",
      },
    ],
    promotion: null,
  },
  {
    id: 16,
    uid: "JCMlSRKuVL",
    title: "Apple",
    sku: "Apple PCH",
    weight: 125.5,
    weightUnit: "gm",
    minimumOrderQuantity: 12,
    mrp: 240.25,
    stock: 120,
    prouductImages: [
      {
        id: 1,
        image:
          "https://cdn.pixabay.com/photo/2016/11/18/13/47/apple-1834639_1280.jpg",
      },
      {
        id: 2,
        image:
          "https://cdn.pixabay.com/photo/2016/09/29/08/33/apple-1702316_1280.jpg",
      },
    ],
    promotion: null,
  },
  {
    id: 16,
    uid: "JCMlSRKuVL",
    title: "Potatos",
    sku: "Potatos PCH",
    weight: 150.5,
    weightUnit: "gm",
    minimumOrderQuantity: 12,
    mrp: 240.75,
    stock: 350,
    prouductImages: [
      {
        id: 1,
        image:
          "https://cdn.pixabay.com/photo/2016/08/11/08/43/potatoes-1585060_640.jpg",
      },
      {
        id: 2,
        image:
          "https://cdn.pixabay.com/photo/2014/08/06/20/32/potatoes-411975_640.jpg",
      },
    ],
    promotion: null,
  },
];

module.exports = { generateUniqueId, productsList };
