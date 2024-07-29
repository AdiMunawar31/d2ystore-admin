import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

const SearchHeader = () => {
  return (
    <Input
      wrapClassName="max-w-[15rem] w-full p-0"
      placeholder="Search"
      startContent={
        <figure className="pl-3">
          <Search size={16} className="opacity-50" />
        </figure>
      }
    />
  )
}

export default SearchHeader
