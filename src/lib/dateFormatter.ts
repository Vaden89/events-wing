import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advancedFormat);

export function dateFormatter(str: string) {
  return dayjs(str).tz("Africa/Lagos").format("ddd, MMM Do, ha");
}
