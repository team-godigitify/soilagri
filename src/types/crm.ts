export const rfqStatuses = ["new", "contacted", "quoted", "won", "lost"] as const;
export type RfqStatus = (typeof rfqStatuses)[number];

export const rfqStatusLabels: Record<RfqStatus, string> = {
  new: "New",
  contacted: "Contacted",
  quoted: "Quoted",
  won: "Won",
  lost: "Lost",
};

export type RfqRecord = {
  id: number;
  createdAt: string;
  updatedAt: string;
  inquiryType: string;
  name: string;
  company: string;
  email: string;
  phone: string | null;
  country: string;
  productInterest: string | null;
  quantity: string | null;
  message: string;
  status: RfqStatus;
  notes: string | null;
};
