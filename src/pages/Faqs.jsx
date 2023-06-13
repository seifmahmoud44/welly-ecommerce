import { useState } from "react";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Faqs = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div className="w-4/5 m-auto flex flex-col justify-center items-center space-y-3 min-h-[600px] max-[991px]:w-full">
      <div className="w-2/3 m-auto">
        <Accordion open={open === 1}>
          <AccordionHeader
            className="border-y-2 py-2 flex justify-between"
            onClick={() => handleOpen(1)}
          >
            How do I make a purchase?
          </AccordionHeader>
          <AccordionBody>
            To make a purchase on our website, simply add the items you want to
            your cart and then proceed to checkout. You will need to create an
            account or sign in to your existing account. Once you have created
            or signed in to your account, you will be able to enter your
            shipping and billing information. You can then choose your payment
            method and complete your purchase.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader
            className="border-b-2 py-2"
            onClick={() => handleOpen(2)}
          >
            What are your shipping and handling charges?
          </AccordionHeader>
          <AccordionBody>
            Our shipping and handling charges vary depending on the weight and
            destination of your order. You can view our shipping rates before
            you make a purchase.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader
            className="border-b-2 py-2"
            onClick={() => handleOpen(3)}
          >
            How long does it take to ship my order?
          </AccordionHeader>
          <AccordionBody>
            The shipping time for your order will vary depending on the shipping
            method you choose. You can view our shipping estimates before you
            make a purchase.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4}>
          <AccordionHeader
            className="border-b-2 py-2"
            onClick={() => handleOpen(4)}
          >
            Can I return or exchange an item?
          </AccordionHeader>
          <AccordionBody>
            Yes, you can return or exchange an item within 30 days of purchase.
            To initiate a return or exchange, please contact our customer
            service department.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 5}>
          <AccordionHeader
            className="border-b-2 py-2"
            onClick={() => handleOpen(5)}
          >
            What are your payment options?
          </AccordionHeader>
          <AccordionBody>
            We accept Visa, Mastercard, American Express, and Discover. We also
            accept PayPal and Google Pay.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 6}>
          <AccordionHeader
            className="border-b-2 py-2"
            onClick={() => handleOpen(6)}
          >
            Do you offer a discount for bulk orders?
          </AccordionHeader>
          <AccordionBody>
            Yes, we offer discounts for bulk orders. To inquire about bulk
            discounts, please contact our sales department.
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};

export default Faqs;
