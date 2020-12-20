import React from "react";
import { IBrewery } from "../../interface/IBrewery";
import { Button, Icon } from "semantic-ui-react";

interface PropTypes {
  brewery: IBrewery;
  showBtn?: boolean;
}

const Address: React.FC<PropTypes> = ({ brewery, showBtn }) => {
  return (
    <>
      <address>
        {brewery?.street && (
          <>
            {brewery?.street},<br />
          </>
        )}
        {brewery?.city && (
          <>
            {brewery?.city},<br />
          </>
        )}
        {brewery?.state && (
          <>
            {brewery?.state},<br />
          </>
        )}
        {brewery?.country && (
          <>
            {brewery?.country},<br />
          </>
        )}
        {brewery?.postal_code && <>{brewery?.postal_code}</>}
      </address>

      {showBtn && brewery.latitude && brewery.longitude && (
        <>
          <br />
          <Button
            color={"teal"}
            labelPosition="right"
            icon={"map marker alternate"}
            as={"a"}
            href={`https://www.google.com/maps/place/${brewery.latitude} ${brewery.longitude}`}
          >
            View Location <Icon name="map marker alternate" color={"black"} />
          </Button>
        </>
      )}
    </>
  );
};

export default Address;
