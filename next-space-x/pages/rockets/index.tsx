import React from "react";
import { GetStaticProps } from "next";
import { getRockets, RocketsList } from "@services/rockets";
import { useRedirect } from "@lib/useRedirect";
import { getRocketUrl } from "@lib/url";

interface PageProps {
  rockets: RocketsList
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const rockets = await getRockets();
  return { props: { rockets } };
}

const Rockets: React.FC<PageProps> = ({ rockets }) => {
  useRedirect(getRocketUrl(rockets[0].id));
  return <>Loading, please wait...</>;
}

export default Rockets; 