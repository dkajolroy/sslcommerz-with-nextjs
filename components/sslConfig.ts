import { SslCommerzPayment } from "sslcommerz";

const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASSWORD;
const is_live = false; //true for live, false for sandbox

export const sslConfig = new SslCommerzPayment(store_id, store_passwd, is_live);

interface Props {
  total_amount: Number;
  tran_id: string;
  success_url: string;
  fail_url: string;
  cancel_url: string;
  product_name: string;
  product_category: string;
  cus_name: string;
  cus_email: string;
  cus_add1: string;
  cus_phone: string;
}
export const dataConfig = ({
  total_amount,
  tran_id,
  success_url,
  fail_url,
  cancel_url,
  product_name,
  product_category,
  cus_name,
  cus_email,
  cus_add1,
  cus_phone,
}: Props) => {
  const data = {
    total_amount,
    tran_id, // use unique tran_id for each api call
    currency: "BDT",
    success_url,
    fail_url,
    cancel_url,
    ipn_url: "http://localhost:3030/ipn",
    shipping_method: "Courier",
    product_name,
    product_category,
    product_profile: "general",
    cus_name,
    cus_email,
    cus_add1,
    cus_add2: "Dhaka",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    cus_phone,
    cus_fax: "01711111111",
    ship_name: "Customer Name",
    ship_add1: "Dhaka",
    ship_add2: "Dhaka",
    ship_city: "Dhaka",
    ship_state: "Dhaka",
    ship_postcode: 1000,
    ship_country: "Bangladesh",
  };
  return data;
};
