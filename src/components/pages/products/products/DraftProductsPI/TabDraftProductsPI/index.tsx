"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AccountPurchase from "./AccountPurchase"
// import AttributeVariant from "./AttributeVariant"
// import Availability from "./Availability"
import BasicInfo from "./BasicInfo"
import Inventory from "./Inventory"

const listTabs = [
  {
    key: "basic-info",
    label: "Basic Info",
    component: <BasicInfo />,
  },
  // {
  //   key: "attribute-variant",
  //   label: "Attribute & Variant",
  //   component: <AttributeVariant />,
  // },
  // {
  //   key: "availability",
  //   label: "Availability",
  //   component: <Availability />,
  // },
  {
    key: "inventory",
    label: "Inventory",
    component: <Inventory />,
  },
  {
    key: "account-purchase",
    label: "Account & Purchase",
    component: <AccountPurchase />,
  },
]

const TabDraftProductsPI = () => {
  return (
    <Tabs asChild defaultValue={listTabs[0].key} className="flex grow flex-col">
      <>
        <TabsList>
          {listTabs.map((tab) => (
            <TabsTrigger key={tab.key} value={tab.key}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {listTabs.map((tab) => (
          <TabsContent key={tab.key} value={tab.key} asChild>
            {tab.component}
          </TabsContent>
        ))}
      </>
    </Tabs>
  )
}

export default TabDraftProductsPI
