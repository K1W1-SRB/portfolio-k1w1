import { PageInfo } from "../typing";

export const fetchPageInfo = async () => {
  const res = await fetch(
    `https://k1w1.tech/api/getPageInfo`
  );

  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
};
