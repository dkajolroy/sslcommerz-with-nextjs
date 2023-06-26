interface SSLResponse {
  status: "SUCCESS" | "FAILED" | "CANCELLED";
  failedreason: string;
  sessionkey: string;
  gw: {};
  redirectGatewayURL: string;
  directPaymentURLBank: string;
  directPaymentURLCard: string;
  directPaymentURL: string;
  redirectGatewayURLFailed: string;
  GatewayPageURL: string;
  storeBanner: string;
  storeLogo: string;
  store_name: string;
  desc: {}[];
  is_direct_pay_enable: string;
}
