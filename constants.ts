
import { Product, Collection } from './types';

export const PRODUCTS: Product[] = [
  // Western Collection
  {
    id: 'p1',
    name: 'The "Eye-Wander" Oversized Tee',
    category: 'Western',
    subCategory: 'Gen-Z Humor',
    price: 1599,
    imageUrl: 'https://i.ibb.co/LnhYmTM/Qv9FXjtK.png',
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
    imageUrl: 'https://i.ibb.co/3m1c3KCP/image.png',
    tag: 'West',
    description: 'Keep it cool like Bernie in his mittens.',
    points: 500
  },
  {
    id: 'p3',
    name: 'Dinner Drama Salad Cat Tee',
    category: 'Western',
    subCategory: 'Iconic',
    price: 1599,
    imageUrl: 'https://i.ibb.co/knL6QQ2/image.png',
    tag: 'West',
    description: 'The ultimate showdown: Woman Yelling at a Cat.',
    points: 450
  },
  {
    id: 'p6',
    name: 'Success Kid Motivation Tee',
    category: 'Western',
    subCategory: 'Classic',
    price: 1299,
    imageUrl: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800',
    description: 'When you find money in your old jeans.',
    points: 250
  },
  {
    id: 'p7',
    name: 'Much Wow Doge Oversized',
    category: 'Western',
    subCategory: 'Internet Legend',
    price: 1899,
    imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800',
    tag: 'Legend',
    description: 'Such fashion. Very meme. Much wow.',
    points: 600
  },

  // Desi Collection
  {
    id: 'p5',
    name: 'Anupama "Main Ghumu" Tee',
    category: 'Desi',
    subCategory: 'TV Drama',
    price: 999,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6nlzpxnlFGaqjuB1ccKxI6XcpkFXGdv3EW8Esgop7qegiDOrirfD5rSu_26pxRW931XqFC2zuN-jXHMRNKeoVKS1zgMLgqcYQiYbSYndRWAtiDZWO8_dFpcN4wSihStExzeQbuln36TEtpPT_pF-7Ddf6lfnxoBF6YXdrrEqJHP0WSy3-cNxut9rVwh15txLXPDTtrBwxuDPj8JhEO9nMlIsq26iBCdWfB_ZK9xLstMhf7Pb5QEr9XegzqoDw8tuyLQWy9Fe-q1w',
    description: 'Relatable Indian TV drama energy.',
    points: 300
  },
  {
    id: 'p8',
    name: 'Gangs of Wasseypur "Tumse Na Ho Payega"',
    category: 'Desi',
    subCategory: 'Bollywood',
    price: 1499,
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
    tag: 'Desi',
    description: 'The ultimate reality check for your siblings.',
    points: 400
  },
  {
    id: 'p9',
    name: 'Engineering "Chai-Sutta" Chronicles',
    category: 'Desi',
    subCategory: 'Student Life',
    price: 1199,
    imageUrl: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&q=80&w=800',
    description: 'The real fuel behind the 4.0 CGPA.',
    points: 350
  },
  {
    id: 'p10',
    name: 'Startup Hustle "Burn Rate" Tee',
    category: 'Desi',
    subCategory: 'Corporate',
    price: 1699,
    imageUrl: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=800',
    tag: 'Hustle',
    description: 'For those bleeding cash but keeping the vibe high.',
    points: 500
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
    imageUrl: 'https://i.ibb.co/LnhYmTM/Qv9FXjtK.png'
  },
  {
    id: 'c4',
    name: 'Gaming',
    category: 'Western',
    itemCount: 15,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWZfnTxuLFXuEELSXsBQ0w1AFG35YHtLcb0mDiPq1Tgc6RNpDxhZPkSxokp64pBSKQkf4LEMA_n7bhHn6HY4tV_GOoH767zNcr8uzs0VL9M5XzOeZJOH_1UGzFmiZEf_UiWcIStqzDJFs0Nb7LiHwxt9O_3dCol7VcKbokwTl7pfC6VgdeclVqEECprDKHPVK4gFixH7BEp8JmxeK7bnZESs95iHObSqON54qBM3C3f-SS4Z-zatP4ARvNJkIDeEahz2R_1rHPxgU'
  }
];
