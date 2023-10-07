import React from "react";
import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "awdhnoawh",
      label: "Accordian 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium nec purus ut dapibus. Sed non placerat mi, nec lobortis nisi. Fusce nec maximus orci. Nulla quis tempor ligula. Mauris sagittis urna sit amet velit sagittis mattis. Nulla lacinia dolor vitae efficitur gravida. ",
    },
    {
      id: "fgrhfka",
      label: "Accordian 2",
      content:
        "Vestibulum eget luctus tortor, non imperdiet metus. Mauris fermentum accumsan neque ut consectetur. Nullam sit amet purus vel nisl aliquet mattis. Sed at condimentum ante. Pellentesque volutpat erat nisl, id consectetur sem pharetra quis.",
    },
    {
      id: "awdhwdawknv",
      label: "Accordian 3",
      content:
        "Suspendisse consequat volutpat nisl, a blandit tellus volutpat at. Pellentesque augue ex, venenatis eget massa sed, ullamcorper congue tortor. Praesent sit amet porttitor odio.",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
