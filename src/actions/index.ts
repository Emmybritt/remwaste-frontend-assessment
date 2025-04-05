import { Skip } from "@/domains/skip";
import { getErrorMessage } from "@/lib/utils";

const BASE_URL = "https://app.wewantwaste.co.uk";

export const fetchSkips = async (): Promise<Skip[]> => {
  try {
    const res = await fetch(
      `${BASE_URL}/api/skips/by-location?postcode=NR32&area=Lowestoft`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch skip data");
    }

    const data = await res.json();
    return data;
  } catch (err: unknown) {
    throw new Error(getErrorMessage(err));
  }
};
