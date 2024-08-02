import React from "react";
import { Accordion } from "react-bootstrap";

const FilterAccordion = ({ filterData, filterDataSize }) => {
  const filter = [
    {
      No: 0,
      title: "Category",
      category: [
        "T-Shirt",
        "Boxer",
        "Vest",
        "Shirt",
        "Joggers",
        "Shorts",
        "Sweatshirt",
        "Hoodies",
        "Pyjama",
        "Jeans",
        "Jacket",
        "Co-Ordinates",
        "Track Pant",
        "Sweater",
        "Trousers",
        "Casual Pants",
        "Pant",
        "Tracksuit",
        "Kurta",
        "Protective Outdoor Mask",
        "Sweatshirt & Jogger Set",
        "Cloth Mask",
      ],
    },
    {
      No: 1,
      title: "Sizes",
      category: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    },
    {
      No: 2,
      title: "Brand",
      category: [
        "Bewakoof®",
        "Bewakoof Air® 1.0",
        "Campus Sutra",
        "Xyxx",
        "Rigo",
        "Bewakoof Heavy Duty® 1.0",
        "Urban Scottish",
        "Bushirt",
        "What's Down",
        "The Daily Outfits",
        "Indiclub",
        "Rodamo",
        "Door 74",
        "Bewakoof American Pima",
        "Difference Of Opinion",
        "Flynoff",
        " Mad Over Print",
        "Shopolics",
        "Dillinger",
        "Chkokko",
        "Dripcult",
        "East Coast Way",
        "Old Grey",
        "Smugglerz",
        "The Dry State",
        "Harpita",
        "Dimeh",
        "Olavi",
        "Kranium",
        "Trends Tower",
        "7 Shores",
        "Fans Army",
        "Urban Legends",
        "Brown Mocha",
        "Kotty",
        "Showoff",
        "Vyve",
        "Blanck",
        "Botnia",
        "Dropout Society",
        "The Bargain Street",
        "Weezy",
        "Belliskey",
        "Brown Brothers",
        "Truebuyworld",
        "Vibebling",
      ],
    },
    {
      No: 3,
      title: "Color",
      category: ["red", "blue", "black"],
    },
    {
      No: 4,
      title: "Design",
      category: [
        "Graphic Print",
        "Solid",
        "Printed",
        "Aop",
        "Typography",
        "Color Block",
        "Checked",
        "Striped",
        "Washed",
        "Self Design",
        "Tie & Dye",
        "Camouflage",
        "Textured",
        "Ombre",
        "Abstract",
        "Embroidered",
        " Floral Print",
        "Polka Print",
        "Geometric Print",
        "Paisley",
        "Ethnic Motifs",
        "Polka Dots",
      ],
    },
    {
      No: 5,
      title: "Fit",
      category: [
        "Graphic Print",
        "Solid",
        "Printed",
        "Aop",
        "Typography",
        "Color Block",
        "Checked",
        "Striped",
        "Washed",
        "Self Design",
        "Tie & Dye",
        "Camouflage",
        "Textured",
        "Ombre",
        "Abstract",
        "Embroidered",
        " Floral Print",
        "Polka Print",
        "Geometric Print",
        "Paisley",
        "Ethnic Motifs",
        "Polka Dots",
      ],
    },
    {
      No: 6,
      title: "Sleeve",
      category: [
        "Graphic Print",
        "Solid",
        "Printed",
        "Aop",
        "Typography",
        "Color Block",
        "Checked",
        "Striped",
        "Washed",
        "Self Design",
        "Tie & Dye",
        "Camouflage",
        "Textured",
        "Ombre",
        "Abstract",
        "Embroidered",
        " Floral Print",
        "Polka Print",
        "Geometric Print",
        "Paisley",
        "Ethnic Motifs",
        "Polka Dots",
      ],
    },
    {
      No: 7,
      title: "Neck",
      category: [
        "Graphic Print",
        "Solid",
        "Printed",
        "Aop",
        "Typography",
        "Color Block",
        "Checked",
        "Striped",
        "Washed",
        "Self Design",
        "Tie & Dye",
        "Camouflage",
        "Textured",
        "Ombre",
        "Abstract",
        "Embroidered",
        " Floral Print",
        "Polka Print",
        "Geometric Print",
        "Paisley",
        "Ethnic Motifs",
        "Polka Dots",
      ],
    },
  ];

  return (
    <Accordion defaultActiveKey="0">
      {filter.map((item, index) => (
        <Accordion.Item key={index} eventKey={index.toString()}>
          <Accordion.Header>{item.title}</Accordion.Header>
          <Accordion.Body>
            <ul>
              {item.category.map((category, index) => (
                <li className="cursor:pointer" key={index}>
                  <p
                    className="text-center"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      if (item.title === "Sizes") {
                        filterDataSize(category);
                      } else if (item.title === "Color") {
                        filterData(category);
                      }
                    }}
                  >
                    {category}
                  </p>
                </li>
              ))}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default FilterAccordion;
