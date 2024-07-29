import type { ApiResponseInterface } from "../interfaces/api"
import type { LanguageInterface } from "../interfaces/languages"

const dummyLanguageData: LanguageInterface[] = [
  {
    id: "lang001",
    name: "English",
    image: "https://example.com/images/english.png",
  },
  {
    id: "lang002",
    name: "Spanish",
    image: "https://example.com/images/spanish.png",
  },
  {
    id: "lang003",
    name: "French",
    image: "https://example.com/images/french.png",
  },
  {
    id: "lang004",
    name: "German",
    image: "https://example.com/images/german.png",
  },
  {
    id: "lang005",
    name: "Chinese",
    image: "https://example.com/images/chinese.png",
  },
]

// Dummy ApiResponse
export const languageApiResponse: ApiResponseInterface<LanguageInterface[]> = {
  data: dummyLanguageData,
  message: "Languages fetched successfully",
  status: 200,
  meta: {
    total: dummyLanguageData.length,
    limit: 10,
    page: 1,
    total_page: 1,
  },
  pagination: {
    total: dummyLanguageData.length,
    limit: 10,
    current_page: 1,
    last_page: 1,
  },
}
