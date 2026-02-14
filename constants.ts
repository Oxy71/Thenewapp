
import { Product, Collection } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'The "Eye-Wander" Oversized Tee',
    category: 'Western',
    subCategory: 'Gen-Z Humor',
    price: 1599,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-Q55JiaZS4jegqdANILr9eRTyu__WQs7sob6VXojLqWaPzrlCol9FRvyDU_lRC2AAdRNM5-w6R_6p7-40dNWGixV1vpbC0fNhFuiOoBgmVfYJQSYQ84MmCHzyqkG-H-UB33jCChJ1wYjLMr8dJ2MOztU04U1xrASisCvAniP8oz-D85gilmEBlf8xyoWvUgg8qc9m-N27Fsoc_bD7fcIf40l6GCJytBQJ0hGtQ32UHYxLTTGEduaQQI3ncspL162ukImqxzwxfpc',
    tag: 'West',
    description: 'Iconic distracted boyfriend meme turned into premium streetwear.',
    backstory: 'Originating from a stock photo by Antonio Guillem, this meme became the internet\'s favorite way to describe new attractions.',
    points: 450
  },
  {
    id: 'p2',
    name: 'Chilly Bernie Mittens Boxy Tee',
    category: 'Western',
    subCategory: 'Viral',
    price: 1699,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAopr2KYOCA5G8nAgz0KZk3q3grpmunQIO0Evc-yANMsgMPupk4iaRumMCrBbWdHh3TMuz-8YrevxCPYUqDzkyDG0UZyrSazgODAQonfUC9y2JFx66Bnjb9GBRtWl5QplUv9_5csRfdroddbZNKsF-qb2yayGiFr_GgqUQXf4cCHh7XIphumFjQYGsohzmZC5K4N3IXFGjTATRJSlo6iwjVRWGdH0nIkebJ75PhDuhEmVj2uXozbd_dD4Y-pGUH9cN39j6XOhGh2TE',
    tag: 'Viral',
    description: 'Keep it cool like Bernie in his mittens.',
    points: 500
  },
  {
    id: 'p3',
    name: 'Dinner Drama Salad Cat Tee',
    category: 'Western',
    subCategory: 'Iconic',
    price: 1599,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBF0cb1-MFDTiJVOll_6ElNEnK__NtOYRTHzyDuD-GFzc4tr-mr8ebHtlNCcLv9lHh-s4KsScrGdN8sUoNQaFr4GbeazsVdaIRV4qbYc6lVACzXNv77ENBp1zC5lGZEfTWn_IGWo1bFzGhUCKQhdS2lG1YCrbyp08NlPf_Gt3yUye2niBFCBSbVaEjVUcs6Q4SDQk_Z8Y0pSC9_Celg83PXTGMLAdD0MGKOwMHLflSl8eBjgxZnHXHlXhpSC9FbcHz0sF4gw7-Zgqg',
    tag: 'Iconic',
    description: 'The ultimate showdown: Woman Yelling at a Cat.',
    points: 450
  },
  {
    id: 'p4',
    name: '"Totally Fine" Fire Street Tee',
    category: 'Western',
    subCategory: 'Oversized',
    price: 1799,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDii1W-nh0BKR0XgBN_m4OOWt_YjG-96jgF5LEwIilzOuS-cbVKDrfmKhYh3APjmfZq47cDcuOUkiTZLirPp6B2yyt6OAGl7WqUeZIZ7rDCd7gnFfRgQ-rFFEKHKOyLXTprprzvtRzDh_AFcKhciwKYO02Vob97i9MX9tumMAS1g1KaCot5rZY0fZ4q07TSosKZBhu8qr7wq7aVxd2yFFwNPFlLUiibiSsHHguvMPNIcFOjF1frXKiSxL8IDrV5gYbPW9px-DUT_2U',
    tag: 'Oversized',
    description: 'When the world is burning but you\'re wearing MemeBazaar.',
    points: 550
  },
  {
    id: 'p5',
    name: 'Anupama "Main Ghumu" Tee',
    category: 'Desi',
    subCategory: 'TV Drama',
    price: 999,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6nlzpxnlFGaqjuB1ccKxI6XcpkFXGdv3EW8Esgop7qegiDOrirfD5rSu_26pxRW931XqFC2zuN-jXHMRNKeoVKS1zgMLgqcYQiYbSYndRWAtiDZWO8_dFpcN4wSihStExzeQbuln36TEtpPT_pF-7Ddf6lfnxoBF6YXdrrEqJHP0WSy3-cNxut9rVwh15txLXPDTtrBwxuDPj8JhEO9nMlIsq26iBCdWfB_ZK9xLstMhf7Pb5QEr9XegzqoDw8tuyLQWy9Fe-q1w',
    description: 'Relatable Indian TV drama energy.',
    points: 300
  }
];

export const COLLECTIONS: Collection[] = [
  {
    id: 'c1',
    name: 'Bollywood Banter',
    category: 'Desi',
    itemCount: 12,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsJDFOrTXpsY4fbEtrLzYCdQS_n8bd9dvsqcb7ny953eBs0eFQ0eUCUw58qq8z-0ujIDWos-HmIGimt9eO1kNr44QCMDmg3eD2ZY8T7F6c9eT1s9IoauLLfnVXfzyHuBcmeOHynstI2Rz7BeSJB-vAjRgu8cvdH1Korg5JRNUDcTjK1cARVcJeIHABnEXGSpOr29rwiWu6Z_ToQg0lZFoiQXabj5CmabgZe2MWcNgC-lhARE9-tfkha1N_0TwnMgNKVP-ndONkgo8',
    trending: true
  },
  {
    id: 'c2',
    name: 'Cricket Chaos',
    category: 'Desi',
    itemCount: 8,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADkfxFVYA5jgdk1mo6hTPy4MX5RbduO5jDCYMyLguagGemLrhfBAjfDz35FsFT9LfVMXdgc8SmR2IHKsZxMhatdY2SXM0PxVnep2y8Slr4OwVMnEqWh0lRvt3BCSUOp_bKSMh7uCVspAeunS2iTGsGXiGgc3ayhB_MNuSIl6-W6FpgITZtIlOD5RFKiYcNrIgz-Z9An07oZ_3QtZAfYzpoc8Zfy1teFKKajDOEwkdULqsiyH2CUs_bzVJLb7DsDKYoBXC4GApS2ms',
    trending: true
  },
  {
    id: 'c3',
    name: 'Gen-Z Humor',
    category: 'Western',
    itemCount: 25,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4xA63EFoSB69CRIcXMv-UCl4yCSh8BCMmrPsPbLAFpR7oYrbG-e2Mt5IfzCcjddZ1Ckc9tezA9-9lrPL1ygAEsBwWX8AADMfcnn_Bl8YZMFXy5owX9LWBlwgxn7YP-zeYEXsuGncru0l8MZ9FFNJIT6ERFnrRUpNsrSaUwuepCecTNH9Lyn9fn0hzRB9qZdhML8pLTOeEzOd1Uial7X-WzAfc176F0w4dnQegfmfFRMppeHkMJ_VnCKPMS98Sfv0qm0nO7NL2L20'
  },
  {
    id: 'c4',
    name: 'Gaming',
    category: 'Western',
    itemCount: 15,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWZfnTxuLFXuEELSXsBQ0w1AFG35YHtLcb0mDiPq1Tgc6RNpDxhZPkSxokp64pBSKQkf4LEMA_n7bhHn6HY4tV_GOoH767zNcr8uzs0VL9M5XzOeZJOH_1UGzFmiZEf_UiWcIStqzDJFs0Nb7LiHwxt9O_3dCol7VcKbokwTl7pfC6VgdeclVqEECprDKHPVK4gFixH7BEp8JmxeK7bnZESs95iHObSqON54qBM3C3f-SS4Z-zatP4ARvNJkIDeEahz2R_1rHPxgU'
  }
];
