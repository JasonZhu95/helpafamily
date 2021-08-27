import React from 'react';

import Card, { CardAddress, CardParagraph, CardTitle } from './Card';

function ShippingForElectronicsDonationsCard() {
  return (
    <Card backgroundImageSource="/images/ElectronicDonations.jpg">
      <CardTitle>{'Shipping Address for Electronics Donations'}</CardTitle>
      <CardParagraph>
        {
          "You can help us collect used laptops, tablets, and smartphones in your country by offering your organization's address as a mailing address for these devices. Volunteers will pick up the items periodically, fix them up, and provide them to families in need. You can optionally be involved with refurbishment and placement too if you'd like."
        }
      </CardParagraph>
      <CardAddress>
        {'Email hi at mhfcares dot org to learn more.'}
      </CardAddress>
    </Card>
  );
}

export default ShippingForElectronicsDonationsCard;