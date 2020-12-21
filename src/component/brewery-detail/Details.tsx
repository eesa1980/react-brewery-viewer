import DetailItem from "./DetailItem";
import { startCase } from "lodash-es";
import { Divider } from "semantic-ui-react";
import Address from "../common/Address";
import { IBrewery } from "../../interface/IBrewery";
import styled from "styled-components";
import React from "react";

interface PropTypes {
  brewery?: IBrewery;
}

const Details: React.FC<PropTypes> = ({ brewery }) => {
  if (!brewery) {
    return <></>;
  }

  return (
    <Wrapper$>
      <DetailItem title={"Brewery Type"}>
        <p>{startCase(brewery?.brewery_type)}</p>
      </DetailItem>

      <Divider horizontal />

      {brewery && (
        <DetailItem title={"Address"}>
          <Address brewery={brewery} showBtn={true} />
        </DetailItem>
      )}

      <Divider horizontal />

      {brewery?.website_url && (
        <DetailItem title={"Website"}>
          <a href={brewery?.website_url} target={"__blank"}>
            {brewery?.website_url}
          </a>
        </DetailItem>
      )}

      <Divider horizontal />

      {brewery?.phone && (
        <DetailItem title={"Phone"}>
          <a href={`tel:${brewery?.phone}`} target={"__blank"}>
            {brewery?.phone}
          </a>
        </DetailItem>
      )}

      <Divider horizontal />
    </Wrapper$>
  );
};

export default Details;

const Wrapper$ = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;
