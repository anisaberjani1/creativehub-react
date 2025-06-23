import FooterList from "./FooterList";

const Footer = () => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="flex flex-wrap justify-around items-start gap-10">
        <FooterList
          title="Shop for"
          items={[
            "Creative Cloud",
            "Photoshop",
            "Adobe Express",
            "Photography",
            "Premiere Pro",
            "Adobe Stock",
            "Elements Family",
            "Document Cloud",
            "Acrobat",
            "Acrobat Sign",
            "Special offers",
            "View plans and pricing",
            "View all products",
          ]}
        />

        <div className="flex flex-col gap-5">
          <FooterList
            title="For business"
            items={[
              "Creative Cloud Pro for business",
              "Creative cloud Pro for enterprise",
              "Acrobat for business",
            ]}
          />
          <FooterList
            title="For education"
            items={[
              "Discounts for students and teachers",
              "Schools and universitites",
              "Digital Learning Solutions",
            ]}
          />
          <FooterList title="For nonprofits" items={["Nonprofit overvies"]} />
          <FooterList
            title="For mobile"
            items={["Apps for iOS", "Apps for android"]}
          />
        </div>

        <FooterList
          title="Experience Cloud"
          items={[
            "What is Experience Cloud?",
            "Analytics",
            "Experience Manager",
            "Commerce",
            "Marketo Engage",
            "Workfront",
            "Terms of Use",
          ]}
        />

        <div className="flex flex-col gap-5">
          <FooterList
            title="Support"
            items={[
              "Download and install",
              "Help Cnter",
              "Adobe Community",
              "Enterprise Support",
              "Genuine software",
            ]}
          />
          <FooterList
            title="Resources"
            items={["Adobe Blog", "Adobe Developer"]}
          />
          <FooterList
            title="Adobe Account"
            items={["Log in to your account"]}
          />
        </div>

        <FooterList
          title="Adobe"
          items={[
            "About",
            "AI Overview",
            "Careers",
            "Newsroom",
            "Corporate responsibility",
            "Investor Relations",
            "Supply chain",
            "Trust Center",
            "Events",
            "Adobe for All",
            "Integrity",
          ]}
        />
      </div>

      <ul className="flex justify-center items-center gap-10 list-none border-y border-black py-4 mt-10">
        <li className="text-sm font-semibold text-gray-700">
          Featured products
        </li>
        <li className="text-sm font-light">Adobe Acrobat Reader</li>
        <li className="text-sm font-light">Adobe Express</li>
        <li className="text-sm font-light">Photoshop</li>
        <li className="text-sm font-light">Illustrator</li>
      </ul>

      <div className="flex flex-col sm:flex-row justify-between text-xs text-gray-700 mt-6 gap-3">
        <p>Change region</p>
        <p>
          Copyright © 2025 Adobe. All rights reserved. / Privacy / Terms of Use
          / Cookie preferences / Do not sell or share my personal information
        </p>
      </div>
    </div>
  );
};

export default Footer;
