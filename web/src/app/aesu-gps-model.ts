export class User {
  authenticated: boolean;
  authorities: Authorities[];
  authority: string;
  credentials: any;
  details: any;
  name: string;
  principal: any;
}

export class Authorities {
  authority: string;
}
