export type EventDetailsInput = {
  name: string;
  location: string;
  custom_url?: string;
  category: string;
  date: string;
  time: string;
  website?: string;
  twitter?: string;
  instagram?: string;
};

type Perk = {
  text: string;
};

export type TicketDetailsInput = {
  name: string;
  price?: string;
  quantity: string;
  ticketType: string;
  description: string;
  perks: Perk[];
};

export type ProfileDetailsInput = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};
