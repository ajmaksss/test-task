declare interface IUser {
  id: string;
  name: string;
}

declare interface IRequest {
  id: string;
  type: string;
  user: IUser;
  created_at: number;
  city_from: string;
  city_to: string;
  persel_type?: number;
  dispatch_date: number;
  description?: string;
}

interface IRequestWithMatch extends IRequest {
  match: IRequest[];
}
