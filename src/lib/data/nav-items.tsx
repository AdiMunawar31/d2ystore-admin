import { BiSolidCategory } from "react-icons/bi"
import { BsBoxSeamFill } from "react-icons/bs"
import {
  FaBell,
  FaBlackTie,
  FaBoxOpen,
  FaBuffer,
  FaChartLine,
  FaCog,
  FaDollarSign,
  FaEnvelope,
  FaFileAlt,
  FaFileInvoice,
  FaPaypal,
  FaShippingFast,
  FaTachometerAlt,
  FaUserFriends,
  FaWarehouse,
} from "react-icons/fa"
import { TbBrandDatabricks } from "react-icons/tb"
import type { NavSidebarInterface } from "../interfaces/nav"

export const navItemD2YStore: NavSidebarInterface[] = [
  {
    name: "Menu",
    children: [
      {
        icon: <FaTachometerAlt />,
        name: "Dashboard",
        link: "/menu/dashboard",
      },
      {
        icon: <FaChartLine />,
        name: "Analytics",
        link: "/menu/analytics",
      },
      {
        icon: <FaDollarSign />,
        name: "Sales",
        link: "/menu/sales",
      },
      {
        icon: <FaBlackTie />,
        name: "Target Management",
        link: "/menu/target-management",
      },
    ],
  },
  {
    name: "Products",
    children: [
      {
        icon: <FaBoxOpen />,
        name: "Products",
        link: "/products/products",
      },
      {
        icon: <TbBrandDatabricks />,
        name: "Product Brand",
        link: "/products/product-brand",
      },
      {
        icon: <FaBuffer />,
        name: "Product Category",
        link: "/products/product-category",
      },
    ],
  },
  {
    name: "Management",
    children: [
      {
        icon: <BsBoxSeamFill />,
        name: "Orders",
        link: "/management/orders",
      },
      {
        icon: <FaUserFriends />,
        name: "Customers",
        link: "/management/customers",
      },
      {
        icon: <BiSolidCategory />,
        name: "Categories",
        link: "/management/categories",
      },
      {
        icon: <FaFileInvoice />,
        name: "Invoices",
        link: "/management/invoices",
      },
      {
        icon: <FaWarehouse />,
        name: "Warehouse",
        link: "/management/warehouse",
      },
      {
        icon: <FaFileAlt />,
        name: "Reports",
        link: "/management/reports",
      },
    ],
  },
  {
    name: "Notification",
    children: [
      {
        icon: <FaBell />,
        name: "Transaction",
        link: "/notification/transaction",
      },
      {
        icon: <FaEnvelope />,
        name: "Message",
        link: "/notification/message",
      },
    ],
  },
  {
    name: "Setting",
    children: [
      {
        icon: <FaCog />,
        name: "General Settings",
        link: "/settings/general",
      },
      {
        icon: <FaPaypal />,
        name: "Payment Settings",
        link: "/settings/payment",
      },
      {
        icon: <FaShippingFast />,
        name: "Shipping Settings",
        link: "/settings/shipping",
      },
    ],
  },
]
